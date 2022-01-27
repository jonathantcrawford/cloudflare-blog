
   
import { useEffect, useState } from "react";
import type { ActionFunction, LoaderFunction, MetaFunction } from "remix";
import { json, Form, useLoaderData, Outlet, useCatch } from "remix";


import { unencryptedSession } from "../../sessions.server";


let SESSION_TOKEN_ID = "SESSION_TOKEN_ID";

let SESSION_CONTRACT_ADDR = "SESSION_CONTRACT_ADDR";




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
  const { nft: { metadata }} = data;


  return json({metadata, contract, tokenId}, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session),
    },
  });


};
export default function Index() {
  const {metadata, contract, tokenId} = useLoaderData();

  useEffect(() => {
    console.log({metadata, contract, tokenId})
  }, [])


  return (
    <Outlet context={{metadata, contract, tokenId}}/>
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
    <blockquote className="font-sans-3 grid-area-content w-100p">
      <h1 className="">App Error</h1>
      <code className="white-space-normal">{error.message}</code>
      <p>
        The NFTPort API rate limit has been temporarily exceeded.
      </p>
    </blockquote>
  );
}