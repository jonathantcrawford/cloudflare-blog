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
import { Footer } from '~/components/Footer/Footer';

import globalStylesUrl from "~/styles/global.css";
import rootStylesUrl from "~/styles/pages/root.css";

import hamlinFontStylesUrl from "~/styles/fonts/hamlin.css";
import decemberFontStylesUrl from "~/styles/fonts/december.css";
import esteroFontStylesUrl from "~/styles/fonts/estero.css";


export const links: LinksFunction = () => {
  return [
    {rel: "icon", href: "/static/images/favicon.png" },
    { rel: "stylesheet",  href: hamlinFontStylesUrl },
    { rel: "stylesheet",  href: decemberFontStylesUrl },
    { rel: "stylesheet", href: esteroFontStylesUrl },
    { rel: "stylesheet",  href: globalStylesUrl },
    { rel: "stylesheet", href: rootStylesUrl },
    
  ];
};



export const meta: MetaFunction = () => {
  const description = "My own dev blog for various topics.";
  const title = "Jon Crawford";
  return { 
    title,
    description,
    keywords: "developer,dev,blog",
    "og:url": "https://joncrawford.me/",
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:image:type": "image/png",
    "og:image": "https://joncrawford.me/static/images/og-preview.png",
    "twitter:image": "https://joncrawford.me/static/images/og-preview.png",
    "twitter:url": "https://joncrawford.me/",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@jon_t_craw",
    "twitter:site": "@jon_t_craw",
    "twitter:title": title,
    "twitter:description": description
  };
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
  });


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
          <animated.div  className="grid-area-footer grid-ps-center w-100p " style={bounce}>
           <Footer/>
          </animated.div>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
