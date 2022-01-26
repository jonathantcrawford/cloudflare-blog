import { NavLink } from "remix";


export const About = () => {

  const aboutClasses = [
    "m-t-1em",
    "font-sans-2",
    "font-size-4",
    "color-text-primary"
  ].join(' ');

  const divClasses = [
    "mx-w-200mm",
    "m-b-1em",
    "l-h-fibem"
  ].join(' ');

  const navLinkClasses = [
    "font-sans-2",
    "font-size-4",
    "text-dec-none",
    "color-cta-primary",
    "color-cta-primary-hover",
  ].join(' ');


  return (
    <div className={aboutClasses}>
      <div className={divClasses}>I am interested in design systems, web3 and user experiences.</div>
      <div className={divClasses}>Feel free to check out my <NavLink to="/blog" className={navLinkClasses}>blog</NavLink>.</div>
    </div>
  );
};
