import React from 'react';
import './Overview.css';

function Overview() {
  return (
    <div className="page-wrapper">
      <section className="overview-hero">
        <div className="container">
          <h1>About Aqua Skin & Body Studio</h1>
          <p className="subtitle">Where Science Meets Serenity</p>
        </div>
      </section>

      <section className="overview-content">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-image">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop"
                alt="Spa professional"
              />
            </div>
            <div className="overview-text">
              <h2>Welcome to Aqua</h2>

              <h3 className="overview-subheading">Our Philosophy</h3>
              <p>
                After more than 22 years traveling the country as a medical aesthetics
                representative, educating practices and witnessing the rise of breakthrough
                skincare technologies, I've learned that the most transformative results come
                from two things: clinical integrity and intentional innovation.
              </p>
              <p>
                At Aqua Skin &amp; Body Studio, my philosophy is simple yet deeply rooted in
                experience: elevated skincare should fit beautifully into real life. That means
                choosing treatments and products that deliver exceptional results with minimal
                downtime, so you can return to your full, busy schedule feeling confident,
                refreshed, and radiant.
              </p>
              <p>
                I intentionally curate women-led and women-founded brands because, time and
                again, I've seen women drive the most thoughtful advancements in our industry.
                Their formulations are smarter, their technologies more intuitive, and their
                approach more aligned with the real needs of real clients. Brands like
                HydroPeptide, Doctor Rogers Skincare, PRX Derm Perfexion, Lennox and Sixteenth,
                and Restorsea reflect the values I've championed throughout my career:
              </p>

              <ul className="overview-values">
                <li>Science-backed results</li>
                <li>Safety and transparency</li>
                <li>A deep understanding of the client journey</li>
                <li>Innovation that respects your time and your skin</li>
              </ul>

              <p>
                My philosophy blends clinical precision with luxury, restorative care. Every
                treatment is designed to support skin health, enhance natural beauty, and create
                meaningful change without disrupting your life. Whether you're stepping in
                between meetings, after school drop-off, or before a weekend away, you'll
                experience treatments that work as hard as you do: quietly, effectively, and
                beautifully.
              </p>
              <p>
                Aqua Skin &amp; Body Studio is where women-driven innovation, clinical expertise,
                and intentional self-care come together. My goal is to help you feel at home in
                your skin, supported by products and treatments created by women who understand
                what it means to balance ambition, wellness, and beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="staff-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="staff-coming-soon">Staff bios coming soon.</p>
        </div>
      </section>

    </div>
  );
}

export default Overview;
