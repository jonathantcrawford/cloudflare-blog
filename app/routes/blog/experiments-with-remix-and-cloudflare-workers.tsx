
   
import { useEffect } from "react";
import type { ActionFunction, LoaderFunction, MetaFunction } from "remix";
import { json, Form, useLoaderData, Outlet } from "remix";


import { unencryptedSession } from "~/sessions.server";

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
        tokenId: "0x0e89341c0000000000000000000000000000000000000000000000000000000000000004",
        contract: "0xd5dfb159788856f9fd5f897509d5a68b7b571ea8"
      } 
      : {
        tokenId: "0x0e89341c0000000000000000000000000000000000000000000000000000000000000009",
        contract: "0xD5Dfb159788856f9fd5F897509d5a68b7b571Ea8"
      };

      tokenId = random.tokenId;
      contract = random.contract;
  }


  session.set(SESSION_TOKEN_ID, tokenId);
  session.set(SESSION_CONTRACT_ADDR, contract);

    // 0xd5dfb159788856f9fd5f897509d5a68b7b571ea8 - Tacoshi
    // 0x0e89341c0000000000000000000000000000000000000000000000000000000000000004

    // 0xD5Dfb159788856f9fd5F897509d5a68b7b571Ea8 - Quesadileon Musck
    // 0x0e89341c0000000000000000000000000000000000000000000000000000000000000009
    var payload: any = {
      id: 1,
      jsonrpc: "2.0",
      method: "eth_call",
      params: [
          {
              data: tokenId,
              to: contract
          }
          , 
          "latest"]
  }


  const req = new Request(`https://mainnet.infura.io/v3/a593f3212732402f9033295ce9f3094b`, {
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

  const res = await fetch(req);
  const data: any = await res.json();
  const url: any = convertFromHex(data.result).match(/https.*/g)?.toString();

  const gatewayReq = new Request(url, {method: 'GET'});
  const metaReq = await fetch(gatewayReq);
  const metaData: any = await metaReq.json();


  const body = JSON.stringify({metaData, contract})


  return new Response(
    body,
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": await unencryptedSession.commitSession(session),
      },
    }
  );
};

export default function Index() {
  const body = useLoaderData();

  const {metaData, contract} = body;


 

  return (
    <Outlet context={{contract, metaData}}/>
  );
}

