import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faDev,
} from '@fortawesome/free-brands-svg-icons';

const ContactIconGroup = () => {
  return (
    <div>
      <a
        className="social-btn"
        href="https://www.linkedin.com/in/developerjustinhager/"
      >
        <FontAwesomeIcon icon={faLinkedin} className="fa" />
      </a>

      <a className="social-btn" href="https://dev.to/zenmnky">
        <FontAwesomeIcon icon={faDev} className="fa" />
      </a>

      <a
        className="social-btn"
        href="https://github.com/zenmnky"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="fa" />
      </a>

      <a className="social-btn" href="mailto:developer@justinhager.codes">
        <FontAwesomeIcon icon={faEnvelope} className="fa" />
      </a>
    </div>
  );
};

export default ContactIconGroup;
