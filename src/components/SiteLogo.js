import React from 'react';
import { Link } from 'react-router-dom';
import './SiteLogo.css';

function SiteLogo() {
  return (
    <Link to="/" className="site-logo">
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
