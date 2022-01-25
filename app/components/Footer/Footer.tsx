import {
  LoaderFunction,
  useLoaderData
} from "remix";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMediumM,
  faGithub,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";




export const Footer = () => {

  const footerClasses = [
    "bg-color-primary",
    "mn-h-40mm",
    "flex",
    "flex-direction-row",
    "justify-content-space-evenly",
    "align-items-center",
    "p-b-4em"
  ].join(' ');

  const iconClasses = [
    "font-size-2",
    "color-cta-primary",
    "color-cta-primary-hover"
  ].join(' ');

  return (
    <div className={footerClasses}>
      <a rel="noreferrer" href="https://medium.com/@jonathantcrawford" target="_blank">
        <FontAwesomeIcon className={iconClasses} icon={faMediumM} />
      </a>
      <a rel="noreferrer" href="https://github.com/jonathantcrawford" target="_blank">
        <FontAwesomeIcon className={iconClasses} icon={faGithub} />
      </a>
      <a rel="noreferrer" href="https://twitter.com/jon_t_craw" target="_blank">
        <FontAwesomeIcon className={iconClasses} icon={faTwitter} />
      </a>
      <a rel="noreferrer" href="https://www.linkedin.com/in/jonathantcrawford/" target="_blank">
        <FontAwesomeIcon className={iconClasses} icon={faLinkedinIn} />
      </a>
    </div>
  );
};
