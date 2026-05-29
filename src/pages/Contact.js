import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="page-wrapper">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="subtitle">We'd Love to Hear From You</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-info contact-info-centered">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Have questions about our services or want to learn more about how we can
              help you achieve your skincare goals? Reach out to us!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>728 3rd St, Suite C<br />Mukilteo, WA 98275</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h3>Call Us</h3>
                  <p><a href="tel:+14253716777">(425) 371-6777</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:HELLO@aquaskinandbodystudio.com">
                      HELLO@aquaskinandbodystudio.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-text">
                  <h3>Hours</h3>
                  <p>By Appointment Only</p>
                </div>
              </div>
            </div>

            <a href="mailto:HELLO@aquaskinandbodystudio.com" className="btn btn-primary email-cta">
              Send Us an Email
            </a>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com/aquaskinandbody" target="_blank" rel="noopener noreferrer" className="social-icon">
                  Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550784741105" target="_blank" rel="noopener noreferrer" className="social-icon">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Aqua Skin & Body Studio Location"
              src="https://maps.google.com/maps?q=728+3rd+St+Suite+C,+Mukilteo,+WA+98275&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
