import React from 'react';
import { Link } from 'react-router-dom';
import './SiteLogo.css';

function SiteLogo() {
  return (
    <Link to="/" className="site-logo">
      <img
        src="/images/LogoSize.jpg"
        alt="Aqua Skin & Body Studio"
        className="site-logo-img"
      />
    </Link>
  );
}

export default SiteLogo;
