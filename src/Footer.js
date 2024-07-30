// import React from 'react';
// import './Footer.css';

// const Footer = () => (
//   <footer className="footer">
//     &copy; {new Date().getFullYear()} Shoe Shine. All rights reserved.
//   </footer>
// );

// export default Footer;
import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.querySelector('.footer').offsetHeight;
      const contentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrolled = window.scrollY + windowHeight;
      if (scrolled >= contentHeight - footerHeight) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isFixed ? 'fixed' : ''}`}>
      &copy; {new Date().getFullYear()} Shoe Shine. All rights reserved.
    </footer>
  );
};

export default Footer;
