import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aqua_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't flash in before the page loads
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('aqua_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('aqua_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p className="cookie-text">
          We use cookies to enhance your experience on our website. By continuing to browse,
          you agree to our use of cookies for analytics and personalization.
          You may accept or decline non-essential cookies below.
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-reject" onClick={handleReject}>
            Decline
          </button>
          <button className="cookie-btn cookie-accept" onClick={handleAccept}>
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
