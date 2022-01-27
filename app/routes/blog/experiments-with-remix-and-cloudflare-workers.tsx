
   
import { useEffect, useState } from "react";
import type { ActionFunction, LoaderFunction, MetaFunction } from "remix";
import { json, Form, useLoaderData, Outlet, useCatch } from "remix";


import { unencryptedSession } from "../../sessions.server";

let SESSION_NFT_URL = "NFT_URL";

let SESSION_TOKEN_ID = "SESSION_TOKEN_ID";

let SESSION_CONTRACT_ADDR = "SESSION_CONTRACT_ADDR";

function convertFromHex(hex:any) {
  var hex = hex.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}


export let meta: MetaFunction = () => {
  return {
    title: "Experiments with Remix and Cloudflare Workers",
    description: "Demo utilizing cookies to run A/B tests.",
  };
};

export let action: ActionFunction = async ({ request }) => {
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );

  let formData = new URLSearchParams(await request.text());
  let contract = formData.get("contract");
  let tokenId = formData.get("tokenId");



  
  session.set(SESSION_TOKEN_ID, tokenId);
  session.set(SESSION_CONTRACT_ADDR, contract);


  return json(null, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session),
    },
  });
};

export let loader: LoaderFunction = async ({ request }) => {
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );

  let tokenId = session.get(SESSION_TOKEN_ID);
  let contract = session.get(SESSION_CONTRACT_ADDR);

  if (typeof contract !== "string" && typeof tokenId !== "string") {
    const random = Math.random() > 0.5 
      ? { 
        tokenId: "9264",
        contract: "0x0AE53C425F0725123205fd4CBDFB1Ac8240445cF"
      } 
      : {
        tokenId: "2558",
        contract: "0x0AE53C425F0725123205fd4CBDFB1Ac8240445cF"
      };

      tokenId = random.tokenId;
      contract = random.contract;
  }


  session.set(SESSION_TOKEN_ID, tokenId);
  session.set(SESSION_CONTRACT_ADDR, contract);



  const req = new Request(`https://api.nftport.xyz/v0/nfts/${contract}/${tokenId}?chain=ethereum&refresh_metadata=true`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `9495f37b-a152-415b-a32c-32660779ba1b`
      },
      method: 'GET'
    })

  const res = await fetch(req);
  const data: any = await res.json();
  const { nft: { metadata_url }} = data;

  const metaDataRes = await fetch(`https://gateway.ipfs.io/ipfs/${metadata_url.replace(/ipfs:\//g, "")}`);
  const metaData: any = await metaDataRes.json();


  return metaData;

};

export default function Index() {
  const metaData = useLoaderData();

  useEffect(() => {
    console.log(metaData);
  },[])
  
  return (
    <code>{"test"}</code>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
          <h1>
            {caught.status} {caught.statusText}
          </h1>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="color-error font-sans-3 grid-area-content w-100p">
      <h1 className="">App Error</h1>
      <pre className="white-space-normal">{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </div>
  );
}