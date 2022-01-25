import { NavLink } from "react-router-dom";

export const Header = () => {
  const navLinkClasses = [
    "font-sans",
    "font-size-1",
    "text-dec-none",
    "color-cta-primary",
    "color-cta-primary-hover",
  ].join(' ');;

  return (
    <div className="width-100p">
      <NavLink to="/" className={navLinkClasses}>
        <span className="m-r-02em">Jon</span>
        <span>Crawford</span>
      </NavLink>
    </div>
  );
};
