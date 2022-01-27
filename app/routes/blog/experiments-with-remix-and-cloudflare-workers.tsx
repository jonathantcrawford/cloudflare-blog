
   
import type { ActionFunction, LoaderFunction, MetaFunction } from "remix";
import { json, Form, useLoaderData, Outlet } from "remix";


import { unencryptedSession } from "~/sessions.server";

let SESSION_KEY = "ab-testing-bucket";


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
  let bucket = formData.get("bucket");
  session.set(SESSION_KEY, bucket);

  await new Promise(resolve => setTimeout(resolve, 700));

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

  let bucket = session.get(SESSION_KEY);
  if (typeof bucket !== "string") {
    bucket = Math.random() > 0.5 ? "a" : "b";
  }

  session.set(SESSION_KEY, bucket);

  return json(
    { bucket },
    {
      headers: {
        "Set-Cookie": await unencryptedSession.commitSession(session),
      },
    }
  );
};

export default function Index() {
  const { bucket } = useLoaderData();


  return (
    <Outlet context={{bucket}}/>
  );
}

