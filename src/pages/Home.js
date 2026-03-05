import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Home.css';

function Home() {
  return (
    <>
      <Hero />

      {/* Intro Quote */}
      <section className="home-intro">
        <div className="container">
          <div className="home-intro-inner">
            <p className="home-quote">
              A boutique sanctuary for those who seek<br />
              both results and restoration.
            </p>
            <div className="divider"></div>
            <Link to="/appointments" className="btn-minimal btn-minimal-dark">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services — 3 image tiles */}
      <section className="home-services">
        <div className="home-services-grid">
          <Link to="/treatments" className="service-tile">
            <div
              className="service-tile-img"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&h=1100&fit=crop)' }}
            ></div>
            <div className="service-tile-label">
              <h3>Facials</h3>
              <span>Explore →</span>
            </div>
          </Link>

          <Link to="/treatments" className="service-tile">
            <div
              className="service-tile-img"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&h=1100&fit=crop)' }}
            ></div>
            <div className="service-tile-label">
              <h3>Massage Therapy</h3>
              <span>Explore →</span>
            </div>
          </Link>

          <Link to="/enhancements" className="service-tile">
            <div
              className="service-tile-img"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&h=1100&fit=crop)' }}
            ></div>
            <div className="service-tile-label">
              <h3>Enhancements</h3>
              <span>Explore →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Closing — minimal brand line */}
      <section className="home-closing">
        <div className="container">
          <p className="home-closing-text">
            With over 30 years of experience in advanced aesthetics —<br />
            <em>your glow begins here.</em>
          </p>
          <Link to="/overview" className="text-link">
            Our Story →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
