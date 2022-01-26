import { NavLink } from "remix";

export const Header = () => {
  const navLinkClasses = [
    "font-sans-1",
    "font-size-1",
    "text-dec-none",
    "flex",
    "flex-wrap"
  ];

  const notActiveClasses = [
    "color-cta-primary",
    "color-cta-primary-hover",
  ];

  const activeClasses = [
    "color-cta-primary",
    "pointer-events-none"
  ];



  return (
    <div className="w-100p">
      <NavLink to="/" className={
          ({isActive}) => isActive 
            ? [...navLinkClasses, ...activeClasses].join(' ') 
            : [...navLinkClasses, ...notActiveClasses].join(' ') } 
              >
        <span className="m-r-0_2em">Jon</span>
        <span >Crawford</span>
      </NavLink>
      <div className="m-t-0_5rem font-sans-2 font-size-7 color-text-primary">
        <b>Software Engineer</b> <b>@</b> <a className="text-dec-none color-cta-primary color-cta-primary-hover" rel="noreferrer" href="https://lunchbox.io/" target="_blank"><b>Lunchbox</b></a>
      </div>
    </div>
  );
};
