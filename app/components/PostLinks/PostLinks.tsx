import { NavLink } from "react-router-dom";





export const PostLinks = ({posts}: any) => {
  return (
    <div className="">
      <div className="">blog posts</div>
      <div className="">
        {posts.map((post: any, idx: any) => (
          <NavLink key={idx} to={post.meta.link} className="">
            <span className="">
              {post.meta.emoji} {post.meta.title}
            </span>
            <span className="">
              {post.meta.subtitle}
            </span>
            <span className="">
              {post.meta.date}
            </span>
        </NavLink>
        ))}
      </div>
    </div>
  );
};
