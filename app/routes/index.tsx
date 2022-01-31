import { MetaFunction, LinksFunction } from "remix";

import { useSpring, animated } from "react-spring";

import { About } from "~/components/About/About";

export const links: LinksFunction = () => {
  return [{ rel: "icon", href: "/static/images/favicon.png" }];
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
    "twitter:description": description,
  };
};

export default function Index() {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 600,
    },
  });

  return (
    <animated.div className="grid-area-content w-100p" style={fade}>
      <About />
    </animated.div>
  );
}
