import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";

import type { LinksFunction, LoaderFunction } from "remix";


export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);

  return {
    ENV: {
      HTTP_PROTOCOL: url.protocol,
      WS_PROTOCOL: url.protocol == "https:" ? "wss:" : "ws:",
      HOST: url.host,
      NODE_ENV: process.env.NODE_ENV,
    },
  };
};

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <base href="/" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet/>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
