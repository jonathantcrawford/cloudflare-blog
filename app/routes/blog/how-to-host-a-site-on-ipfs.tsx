import type { LinksFunction, MetaFunction } from "remix";
import { Outlet } from "remix";
import { useSpring, animated } from "react-spring";


import markdownStyles from "~/styles/markdown.css";
import { links as codeSnippetLinks } from "~/components/CodeSnippet/CodeSnippet";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>",
    },
    ...codeSnippetLinks(),
    { rel: "stylesheet", href: markdownStyles}
  ];
};

export const meta: MetaFunction = () => {
  const title = "How to host a site on IPFS";
  const description =
    "An overview on how to use Fleek.co to host a static site on IPFS.";
  return {
    title,
    description,
    keywords: "developer,dev,blog",
    "og:url": "https://joncrawford.me/blog/how-to-host-a-site-on-ipfs",
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:image:type": "image/png",
    "og:image":
      "https://joncrawford.me/static/images/blog/how-to-host-a-site-on-ipfs/og-preview.png",
    "twitter:image":
      "https://joncrawford.me/static/images/blog/how-to-host-a-site-on-ipfs/og-preview.png",
    "twitter:url": "https://joncrawford.me/blog/how-to-host-a-site-on-ipfs",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@jon_t_craw",
    "twitter:site": "@jon_t_craw",
    "twitter:title": title,
    "twitter:description": description,
  };
};

export default function HowToHostASiteOnIPFS() {

  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 600,
    },
  });

  return (
    <animated.div className="grid-area-content w-100p markdown" style={fade}>
      <Outlet/>
    </animated.div>
  )
}
