import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    &copy; {new Date().getFullYear()} Shoe Shine. All rights reserved.
  </footer>
);

export default Footer;
