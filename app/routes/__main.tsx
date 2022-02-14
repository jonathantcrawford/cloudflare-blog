
import {
    Outlet,
  } from "remix";
import type { LinksFunction, LoaderFunction } from "remix";
import { useSpring, animated } from "react-spring";

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

export default function Main() {
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
        <div className="bg-color-primary grid grid-custom-root mn-h-100vh mx-w-100vw">
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
    )
}