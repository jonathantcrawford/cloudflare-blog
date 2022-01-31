import { Outlet, useCatch } from "remix";
import { MetaFunction, LinksFunction } from "remix";

import { useSpring, animated } from "react-spring";

import styles from "~/styles/markdown.css";

import { links as codeSnippetLinks } from "~/components/CodeSnippet/CodeSnippet";
import saygonFontStylesUrl from "~/styles/fonts/saygon.css";

export const links: LinksFunction = () => {
  return [
    ...codeSnippetLinks(),
    {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>",
    },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: saygonFontStylesUrl },
  ];
};

export const meta: MetaFunction = () => {
  const title = "Jon Crawford | Blog";
  const description = "My own dev blog for various topics.";

  return {
    title,
    description,
    keywords: "developer,dev,blog",
    "og:url": "https://joncrawford.me/blog",
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:image:type": "image/png",
    "og:image": "https://joncrawford.me/static/images/og-preview.png",
    "twitter:image": "https://joncrawford.me/static/images/og-preview.png",
    "twitter:url": "https://joncrawford.me/blog",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@jon_t_craw",
    "twitter:site": "@jon_t_craw",
    "twitter:title": title,
    "twitter:description": description,
  };
};

export default function Blog() {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 600,
    },
  });

  return (
    <animated.div className="grid-area-content w-100p markdown" style={fade}>
      <Outlet />
    </animated.div>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="color-error font-sans-3 grid-area-content w-100p">
      <h1 className="">App Error</h1>
      <pre className="white-space-normal">{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </div>
  );
}
