import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import { useSpring, animated } from "react-spring";

import type { LinksFunction, LoaderFunction } from "remix";

import { Header } from "~/components/Header/Header";
import { Footer } from "~/components/Footer/Footer";

import globalStylesUrl from "~/styles/global.css";
import rootStylesUrl from "~/styles/pages/root.css";

import hamlinFontStylesUrl from "~/styles/fonts/hamlin.css";
import decemberFontStylesUrl from "~/styles/fonts/december.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: hamlinFontStylesUrl },
    { rel: "stylesheet", href: decemberFontStylesUrl },
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: rootStylesUrl },
  ];
};



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
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 600,
    },
  });

  const bounce = useSpring({
    to: { y: "0%" },
    from: { y: "100%" },
    config: {
      frequency: 0.4,
      damping: 0.3,
    },
  });

  return (
    <html lang="en" className="bg-color-primary">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <base href="/" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="grid grid-custom-root mn-h-100vh mx-w-100vw">
          <animated.div className="grid-area-header" style={fade}>
            <Header />
          </animated.div>

          <Outlet />
          <animated.div
            className="grid-area-footer grid-ps-center w-100p "
            style={bounce}
          >
            <Footer />
          </animated.div>
        </div>
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
