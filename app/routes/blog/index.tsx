import { LinksFunction } from "remix";

import { PostLinks } from "~/components/PostLinks/PostLinks";

// Import all your posts from the app/routes/posts directory. Since these are
// regular route modules, they will all be available for individual viewing
// at /posts/a, for example.

export default function Index() {
  return <PostLinks />;
}
