import { NavLink, LinksFunction, useLoaderData } from "remix";

import * as postA from "~/routes/blog/how-to.mdx";


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
      <div className="m-t-2em font-sans-2 font-size-4 font-w-600 color-display-primary m-b-1_5em p-b-0_5em border-bottom-w-2px border-bottom-solid order-bottom-color-display-primary">blog posts</div>
      <div className="">
        <NavLink to="/blog/how-to" className="">
            <span className="">
              {'💻'} {'How to host a site on IPFS'}
            </span>
            <span className="">
              {'An overview on how to use Fleek.co to host a static site on IPFS.'}
            </span>
            <span className="">
              {'01/14/2022'}
            </span>
        </NavLink>
      </div>
    </div>
  );
};
