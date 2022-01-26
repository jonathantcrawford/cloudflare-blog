import { NavLink, LinksFunction, useLoaderData } from "remix";

import * as postA from "~/routes/blog/how-to-host-a-site-on-ipfs.mdx";


function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  };
}

export function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return [
    postFromModule(postA)
  ];
}


export const PostLinks = () => {
  const posts = useLoaderData();
  return (
    <div className="w-100p">
      <div className="m-t-2em font-sans-3 font-size-4 font-w-400 color-display-primary m-b-1_5em p-b-0_5em border-bottom-w-2px border-bottom-solid order-bottom-color-display-primary">Blog Posts</div>
      <div className="grid grid-auto-rows-min-content grid-auto-flow-row grid-gap-5vh">
        <NavLink rel="prefetch" to="/blog/experiments-with-remix-and-cloudflare-workers" className="color-cta-primary color-cta-primary-hover text-dec-none border-radius-2vmn border-width-0_05vmn border-solid border-color-cta-primary p-3vmn flex flex-direction-column">
            <span className="font-size-4 font-w-400 font-sans-3 p-b-0_5em">
              {'🔥'} {'Experiments with Remix and Cloudflare Workers'}
            </span>
            <span className="font-size-5 font-w-300 font-sans-3 p-b-1em">
              {'Does edge server side rendering live up to the hype?'}
            </span>
            <span className="font-size-6 font-w-300 font-sans-3 text-align-right">
              {'01/30/2022'}
            </span>
        </NavLink>
        <NavLink rel="prefetch" to="/blog/how-to-host-a-site-on-ipfs" className="color-cta-primary color-cta-primary-hover text-dec-none border-radius-2vmn border-width-0_05vmn border-solid border-color-cta-primary p-3vmn flex flex-direction-column">
            <span className="font-size-4 font-w-400 font-sans-3 p-b-0_5em">
              {'💻'} {'How to host a site on IPFS'}
            </span>
            <span className="font-size-5 font-w-300 font-sans-3 p-b-1em">
              {'An overview on how to use Fleek.co to host a static site on IPFS.'}
            </span>
            <span className="font-size-6 font-w-300 font-sans-3 text-align-right">
              {'01/14/2022'}
            </span>
        </NavLink>
      </div>
    </div>
  );
};