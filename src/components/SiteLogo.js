import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SiteLogo.css';

function SiteLogo() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link to="/" className={`site-logo ${hidden ? 'hidden' : ''}`}>
      <img
        src="/Logo.png"
        alt="Aqua Skin & Body Studio"
        className="site-logo-img"
      />
      <div className="site-logo-text">
        <span className="logo-text-aqua">AQUA</span>
        <span className="logo-text-sub">SKIN &amp; BODY STUDIO</span>
      </div>
    </Link>
  );
}

export default SiteLogo;
