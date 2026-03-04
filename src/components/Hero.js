import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-full" style={{ backgroundImage: `url('/images/hero-image.png')` }}>
      <div className="hero-overlay"></div>

      {/* Title — top */}
      <div className="hero-top fade-in-up">
        <p className="hero-location">Mukilteo, Washington</p>
        <h1 className="hero-brand">Aqua Skin &amp; Body Studio</h1>
      </div>

      {/* Tagline + CTA — bottom, leaves center open for the water drop */}
      <div className="hero-bottom fade-in-up">
        <p className="hero-tagline"><em>Where science meets serenity.</em></p>
        <Link to="/appointments" className="btn-minimal btn-minimal-light">
          Reserve Your Experience
        </Link>
      </div>
    </section>
  );
}

export default Hero;
