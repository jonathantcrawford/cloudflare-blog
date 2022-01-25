

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMediumM,
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="">
      <a href="https://medium.com/@jonathantcrawford" target="_blank">
        <FontAwesomeIcon icon={faMediumM} />
      </a>
      <a href="https://github.com/jonathantcrawford" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://twitter.com/jon_t_craw" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.linkedin.com/in/jonathantcrawford/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
};
