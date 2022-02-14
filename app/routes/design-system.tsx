import { LinksFunction } from "remix";

import { useSpring, animated } from "react-spring";

import saygonFontStylesUrl from "~/styles/fonts/saygon.css";
import hamlinFontStylesUrl from "~/styles/fonts/hamlin.css";
import decemberFontStylesUrl from "~/styles/fonts/december.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: hamlinFontStylesUrl },
    { rel: "stylesheet", href: decemberFontStylesUrl },
    { rel: "stylesheet", href: saygonFontStylesUrl }
  ];
};

export default function DesignSystem() {


  return (
    <div className="system">
    </div>
  );
}
