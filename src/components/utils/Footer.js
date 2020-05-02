import React from 'react';

import Gmail from './images/Gmail.png';


const Footer = () => {
  return (
    <footer className="mt-4 p-3">
      <div className="footer-mail mr-3 mb-2 d-flex justify-content-end">
        <img className="footer-mail-img mr-2" src={Gmail} alt="Gmail" style={{width: '25px', height: 'auto'}} />
        <a href="/contact">jenikele21h@gmail.com</a>
      </div>
      <div className="footer-name mr-3 d-flex justify-content-end">
        JOSHTEFLON © 2020
      </div>
    </footer>
  );
}

export default Footer;