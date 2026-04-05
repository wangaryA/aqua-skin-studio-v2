import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

function Products() {
  return (
    <div className="page-wrapper">
      <section className="products-hero">
        <div className="container">
          <h1>Professional Skincare Products</h1>
          <p className="subtitle">Curated for Results. Applied with Expertise.</p>
        </div>
      </section>

      <section className="products-intro">
        <div className="container">
          <p>
            At Aqua Skin &amp; Body Studio, we carefully curate professional skincare brands
            that meet our standards for efficacy, ingredient integrity, and results. Every
            product we carry is one we trust and use in our treatment room.
          </p>
        </div>
      </section>

      {/* HydroPeptide Brand */}
      <section className="brand-section brand-section-light">
        <div className="container">
          <div className="brand-section-inner">
            <div className="brand-section-text">
              <h2>HydroPeptide</h2>
              <p className="brand-section-label">Women-Led C-Suite · Bellevue, WA</p>
              <p>
                HydroPeptide is a luxury anti-aging skincare line powered by patented peptide
                technology and the science of epigenetics. Their approach goes beyond surface-level
                results, working at the cellular level to visibly reduce the signs of aging, improve
                skin tone and texture, and deliver transformative radiance with every use.
              </p>
              <p>
                As an authorized provider, we carry and use HydroPeptide products exclusively in
                our treatment room and recommend them as part of personalized at-home regimens.
                Every formula is thoughtfully crafted to be as effective as it is indulgent.
              </p>
              <p className="affiliate-coming-soon">Shop link coming soon. Affiliate store launching shortly.</p>
            </div>
            <div className="brand-section-image">
              <img src="/images/hydropeptide-award.jpg" alt="HydroPeptide Best Sheet Mask Company 2024 American Spa Awards" />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Rogers Brand */}
      <section className="dr-rogers-section">
        <div className="container">
          <div className="dr-rogers-inner">
            <div className="dr-rogers-text">
              <h2>Doctor Rogers Skin Care</h2>
              <p className="brand-section-label" style={{ marginBottom: '12px' }}>Founded by Dermatologist Heather D. Rogers, MD, FAAD · Seattle, WA</p>
              <p className="dr-rogers-tagline">Credible. CLEAN. <em>Uncompromising.</em></p>
              <p>
                Nationally-acclaimed, procedural dermatologist, trusted skincare expert,
                and founder of Doctor Rogers Skin Care, Dr. Heather D. Rogers, MD is known
                for her no-nonsense advice. After seeing countless patients struggle with
                irritation and damage caused by overcomplicated, overhyped skincare, she
                decided to create something better: clean, hypoallergenic essentials
                powered by decades of clinical experience and proven bioactives that help
                skin perform at its best.
              </p>
              <p>
                With uncompromising standards for efficacy and ingredient integrity,
                Doctor Rogers Skin Care helps people <em>age well</em>, with confidence
                and ease.
              </p>
              <p className="affiliate-coming-soon">Shop link coming soon. Affiliate store launching shortly.</p>
            </div>
            <div className="dr-rogers-image">
              <img src="/images/doctor-rogers.jpg" alt="Dr. Heather Rogers with Doctor Rogers Skin Care products" />
            </div>
          </div>
        </div>
      </section>

      {/* Lenox and Sixteenth */}
      <section className="brand-section brand-section-light">
        <div className="container">
          <div className="brand-section-inner reverse">
            <div className="brand-section-image">
              <img src="/images/lenox-sixteenth.png" alt="Amy Peterson, founder of Lenox and Sixteenth" />
            </div>
            <div className="brand-section-text">
              <h2>Lenox and Sixteenth</h2>
              <p className="brand-section-label">Founded by Amy Peterson, RN, LMA · Miami, FL</p>
              <p>
                Founded by celebrity medical aesthetician Amy Peterson, Lenox and Sixteenth
                is a luxury skincare brand that redefines at-home routines with
                clinic-inspired essentials. Inspired by her own personal journey of
                resilience, overcoming a life-threatening accident at 18 that left her with
                40 scars, Amy combines her in-clinic expertise with a passion for
                regenerative skin healing. This journey fueled her dedication to creating
                inclusive, effective formulas that empower confidence and deliver radiant,
                healthy skin.
              </p>
              <p>
                Thoughtfully crafted for all skin types, Lenox and Sixteenth offers vegan,
                cruelty-free products made with the highest quality, safety-tested
                ingredients designed to transform your skincare regimen.
              </p>
              <p className="affiliate-coming-soon">Shop link coming soon. Affiliate store launching shortly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restorsea PRO */}
      <section className="brand-section brand-section-light">
        <div className="container">
          <div className="brand-section-inner">
            <div className="brand-section-text">
              <h2>Restorsea PRO</h2>
              <p className="brand-section-label">Founded by Patti Pao, MBA · Houston, TX</p>
              <p>
                Harvard MBA. 40 years in beauty. The woman who brought glycolic acid to the world.
              </p>
              <p>
                Before founding Restorsea, Patti Pao formulated over 400 beauty products for brands
                like Avon, Guerlain, and Elizabeth Arden. At Avon in the late 1980s, she was part of
                the team that commercialized glycolic acid, creating Avon Anew, the $1 billion brand
                that introduced AHAs to the mainstream skincare market.
              </p>
              <p>
                In 2010, while touring a Norwegian salmon hatchery, Patti discovered an enzyme that
                baby salmon release at hatching. This enzyme only digests dead skin cells, leaving
                living cells intact. The enzyme had been patented for 12 years, but no one could
                formulate with it. Her lab solved the problem in one year, becoming the first to
                create stable formulations with a living salmon hatching enzyme.
              </p>
              <p>
                Today, Restorsea holds 35 patents through 2032. Patti runs the brand with the same
                directness that made her "disruptive" in corporate America. She answers customer
                questions personally, refuses to make claims she can't back with clinical studies,
                and proves that science beats hype.
              </p>
              <p className="affiliate-coming-soon">Shop link coming soon. Affiliate store launching shortly.</p>
            </div>
            <div className="brand-section-image">
              <img src="/images/patti.png" alt="Patti Pao, Founder of Restorsea PRO" />
            </div>
          </div>
        </div>
      </section>

      {/* Xtresse */}
      <section className="brand-section brand-section-dark">
        <div className="container">
          <div className="brand-section-inner reverse">
            <div className="brand-section-image">
              <img src="/images/xtresse.png" alt="Xtresse hair gummy vitamins" />
            </div>
            <div className="brand-section-text">
              <h2>Xtresse</h2>
              <p className="brand-section-label">Hair Gummy Vitamins</p>
              <p>
                Founded by leading dermatologists and hair restoration experts, Xtresse
                exists because the market was full of guesses, not solutions. We identified
                the cellular mechanisms driving hair loss and built a system to address
                them, with nothing extra, nothing unnecessary.
              </p>
              <p>
                Now, for the first time, you can get a complete hair growth system from
                at-home to in-office.
              </p>
              <p>
                This is what happens when science meets real needs and delivers real results.
              </p>
              <p className="affiliate-coming-soon">Shop link coming soon. Affiliate store launching shortly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-cta">
        <div className="container">
          <h2>Not Sure Where to Start?</h2>
          <p>
            Book a consultation and we'll build a personalized skincare routine
            tailored specifically to your skin's needs.
          </p>
          <Link to="/appointments" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </div>
  );
}

export default Products;
