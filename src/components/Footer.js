import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="footer-logo">Aqua Skin &amp; Body Studio</h2>
          <p className="footer-tagline"><em>Where science meets serenity.</em></p>
        </div>

        <div className="footer-mid">
          <div className="footer-col">
            <p className="footer-col-heading">Studio</p>
            <ul>
              <li><Link to="/overview">About</Link></li>
              <li><Link to="/treatments">Treatments</Link></li>
              <li><Link to="/enhancements">Enhancements</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-heading">Visit</p>
            <ul>
              <li>728 3rd St, Suite C</li>
              <li>Mukilteo, WA 98275</li>
              <li>(425) 877-4987</li>
              <li>(425) 371-6777</li>
              <li>HELLO@aquaskinandbodystudio.com</li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-heading">Connect</p>
            <ul>
              <li><Link to="/appointments">Book Appointment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <a href="https://www.instagram.com/aquaskinandbody" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61550784741105" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Aqua Skin &amp; Body Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
