import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
  return (
    <footer className="mt-4 p-2">
      <div className="footer-mail mr-2 d-flex justify-content-end">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>jenikele21h@gmail.com</p>
      </div>
      <div className="footer-name mr-3 d-flex justify-content-end">
        JOSHTEFLON © 2020
      </div>
    </footer>
  );
}

export default Footer;