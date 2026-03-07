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
              <p>
                Aqua Skin & Body Studio is a boutique sanctuary dedicated to luxurious facials,
                restorative body therapy, and personalized skin wellness. Designed for those who
                value both results and relaxation, the studio blends advanced aesthetic expertise
                with a serene, intimate environment where every detail is curated for comfort,
                calm, and transformation.
              </p>
              <p>
                With more than 30 years of experience in medical aesthetics, dermatology
                pharmaceuticals, and luxury skincare, I created Aqua Skin & Body Studio to offer
                something rare in today's fast-paced beauty world — unhurried, high-touch care
                rooted in science, expertise, and genuine connection. Each treatment is
                thoughtfully customized, combining clinical-grade skincare with sensory
                indulgence to support the skin, body, and nervous system as a whole.
              </p>
              <p>
                At Aqua, luxury aesthetics means more than beautiful surroundings. It's the art
                of delivering elevated, results-driven treatments with intention and warmth. From
                the moment you arrive, you're welcomed into a calming space designed to help you
                unwind, reset, and feel truly cared for. My goal is simple: to help you look and
                feel your best — glowing, confident, and restored from the inside out.
              </p>

              <div className="credentials">
                <h3>Specialties</h3>
                <ul>
                  <li>Luxury Facials & Advanced Skin Treatments</li>
                  <li>Customized Massage Therapy</li>
                  <li>Anti-Aging & Corrective Skincare</li>
                  <li>Hydration, Barrier Repair & Glow-Boosting Protocols</li>
                  <li>Personalized Homecare Guidance</li>
                </ul>
              </div>
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

      <section className="philosophy-section">
        <div className="container">
          <h2>What Luxury Aesthetics Means at Aqua</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon">✨</div>
              <h3>Luxury, Intimacy & Calm</h3>
              <p>A curated, boutique environment designed to feel private, peaceful, and indulgent — never rushed, never crowded.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">🔬</div>
              <h3>Expertise You Can Feel</h3>
              <p>Three decades of aesthetic mastery, clinical training, and a deep understanding of skin health shape every service.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">💧</div>
              <h3>Results-Driven Rituals</h3>
              <p>Treatments blend science and sensorial luxury — clinical-grade skincare, expert touch, and customized protocols.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">🌿</div>
              <h3>Whole-Body Wellness</h3>
              <p>Facials and massage therapy offered together to support skin, body, and nervous system harmony.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">💎</div>
              <h3>Elevated Client Care</h3>
              <p>Every guest is welcomed like a VIP — thoughtful consultation, personalized recommendations, and a high-touch experience from start to finish.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overview;
