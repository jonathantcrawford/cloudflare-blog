import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction
} from "remix";
import { useSpring, animated } from "react-spring";

import type { MetaFunction } from "remix";

import { Header } from '~/components/Header/Header';

import globalStylesUrl from "~/styles/global.css";
import rootStylesUrl from "~/styles/pages/root.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: rootStylesUrl }
  ];
};



export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const fade = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: {
      duration: 600
    }
  });

  const bounce = useSpring({ 
    to: { y: "0%" }, 
    from: { y: "100%" },
    config: {
      frequency: 0.4,
      damping: 0.3
    }
  })

  return (
    <html lang="en" className="bg-color-primary">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="grid grid-custom-root mn-h-100vh mx-w-100vw">
          <animated.div  className="grid-area-header" style={fade}>
            <Header/>
          </animated.div>

          <Outlet/>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
