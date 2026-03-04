import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setScrolled(false);
    window.scrollTo(0, 0);
  }, [location]);

  const transparent = isHome && !scrolled;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${transparent ? 'transparent' : ''}`}>
      <div className="container navbar-container">

        {/* Left nav links */}
        <ul className="nav-links nav-left">
          <li><Link to="/overview">About</Link></li>
          <li><Link to="/treatments">Treatments</Link></li>
          <li><Link to="/enhancements">Enhancements</Link></li>
        </ul>

        {/* Centered logo */}
        <Link to="/" className="logo">
          <span>Aqua Skin &amp; Body Studio</span>
        </Link>

        {/* Right nav links */}
        <ul className="nav-links nav-right">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/gift-certificate">Gift Cards</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="nav-book"><Link to="/appointments">Book</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile full-screen menu */}
        <ul className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/overview">About</Link></li>
          <li><Link to="/treatments">Treatments</Link></li>
          <li><Link to="/enhancements">Enhancements</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/gift-certificate">Gift Cards</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="nav-book"><Link to="/appointments">Book</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
