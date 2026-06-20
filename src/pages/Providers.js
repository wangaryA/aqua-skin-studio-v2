import React from 'react';
import './Providers.css';

function Providers() {
  return (
    <div className="page-wrapper">
      <section className="providers-hero">
        <div className="container">
          <h1>Medical Partners</h1>
          <p className="subtitle">Expert Care, Right Here at Aqua</p>
        </div>
      </section>

      <section className="providers-intro-section">
        <div className="container">
          <p className="providers-intro">
            AQUA Skin &amp; Body Studio is excited to partner with two amazing Aesthetic Medical Providers!
          </p>
        </div>
      </section>

      <section className="providers-content">
        <div className="container">

          {/* Eve Stern */}
          <div className="provider-card">
            <div className="provider-photo">
              <img src="/images/eve-stern.jpg" alt="Eve Stern, RN, MS, LMA" />
            </div>
            <div className="provider-info">
              <div className="provider-tag">Now Booking — First Day July 7th</div>
              <h2>Eve Stern, RN, MS, LMA</h2>
              <p className="provider-title">Aesthetic Nurse Injector &amp; Master Aesthetician</p>
              <p className="provider-specialties">
                Specializing in Botox, Daxxify, RHA Fillers
              </p>
              <p className="provider-bio">
                With more than 35 years of healthcare experience, Eve serves at AQUA Skin &amp; Body
                Studio as an Aesthetic Nurse Injector and Master Aesthetician. She holds a Master's
                Degree in Health Science Administration and a Nursing Degree from Columbia University
                in New York City. This rare combination of medical training and advanced aesthetic
                expertise allows her to deliver exceptional, northwest natural results.
              </p>
              <div className="provider-actions">
                <a
                  href="https://www.vagaro.com/aquaskinandbodystudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="https://enhanceskinandbrow.com/fillers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="provider-gallery-link"
                >
                  View Before &amp; After Gallery →
                </a>
              </div>
            </div>
          </div>

          {/* Richard Baxter */}
          <div className="provider-card reverse">
            <div className="provider-photo">
              <img src="/images/richard-baxter.jpg" alt="Richard Baxter, MD" />
            </div>
            <div className="provider-info">
              <h2>Richard Baxter, MD</h2>
              <p className="provider-title">Plastic Surgeon &amp; Longevity Medicine</p>
              <p className="provider-specialties">Phase Plastic Surgery &amp; Longevity</p>
              <p className="provider-bio">
                Richard A. Baxter, M.D. of Phase Plastic Surgery &amp; Longevity has been one of
                the leading plastic surgeons in the Northwest for more than three decades. Having
                been formally trained in art before becoming a board-certified plastic surgeon, he
                brings a unique combination of skills and experience for impressive outcomes to
                thousands of patients throughout his career.
              </p>
              <p className="provider-bio">
                Dr. Baxter launched Phase Longevity after observing the connection between health
                and beauty, and the impressive advances in the science of longevity medicine. Phase
                Longevity moves beyond traditional anti-aging to offer clinically validated therapies
                and interventions. These include Therapeutic Plasma Exchange (TPE), sophisticated
                biological age measurement, exosomes, and evidence-based prescriptions for healthy
                longevity.
              </p>
              <div className="provider-actions">
                <a
                  href="http://phaseplasticsurgery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Phase Plastic Surgery
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="providers-cta">
        <div className="container">
          <h2>Ready to Meet Our Team?</h2>
          <p>Book an appointment and experience the difference expert care makes.</p>
          <a
            href="https://www.vagaro.com/aquaskinandbodystudio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Providers;
