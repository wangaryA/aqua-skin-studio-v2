import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-clean">
      <div className="container hero-container fade-in-up">
        <p className="hero-location">Mukilteo, Washington</p>
        <h1 className="hero-brand">Aqua Skin &amp; Body Studio</h1>
        <div className="hero-divider"></div>
        <p className="hero-tagline">Where science meets serenity.</p>
        <Link to="/appointments" className="btn-minimal btn-minimal-dark">
          Reserve Your Experience
        </Link>
      </div>
    </section>
  );
}

export default Hero;
