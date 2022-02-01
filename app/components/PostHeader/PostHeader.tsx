import { NavLink } from "remix";

export const PostHeader = ({ info }: any) => {
  return (
    <>
      <NavLink
        prefetch="intent"
        to="/blog"
        className="ignore-markdown block text-dec-none color-cta-primary color-cta-primary-hover font-sans-3 font-size-5 m-b-1rem"
      >{`< all posts`}</NavLink>
      <div className="bg-color-display-primary color-0 text-dec-none border-radius-2vmn border-width-0_05vmn border-solid border-color-display-primary p-3vmn flex flex-direction-column">
        <span className="font-size-2 font-w-800 font-sans-3 p-b-0_5em">
          {info.emoji} {info.title}
        </span>
        <span className="font-size-5 font-w-500 font-sans-3 p-b-1em">
          {info.subtitle}
        </span>
        <span className="font-size-5 font-w-500 font-sans-3 text-align-right">
          {info.date}
        </span>
      </div>
    </>
  );
};
