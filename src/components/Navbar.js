import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const transparent = !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 80);
      if (currentY > lastScrollY.current && currentY > 120 && !mobileMenuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setScrolled(false);
    setHidden(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${transparent ? 'transparent' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="container navbar-container">

        {/* Left nav links */}
        <ul className="nav-links nav-left">
          <li><Link to="/overview">About</Link></li>
          <li><Link to="/treatments">Treatments</Link></li>
          <li><Link to="/enhancements">Enhancements</Link></li>
        </ul>

        {/* Centered logo */}
        <Link to="/" className="logo">
          <img src="/images/Final-Final-Hero-Image-removebg-preview.png" alt="Aqua Skin & Body Studio" className="logo-img" />
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
