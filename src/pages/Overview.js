import React from 'react';
import './Overview.css';

function Overview() {
  return (
    <div className="page-wrapper">
      <section className="overview-hero">
        <div className="container">
          <h1>About Aqua Skin & Body Studio</h1>
          <p className="subtitle">Luxury Precision Skincare</p>
        </div>
      </section>

      <section className="overview-content">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-image">
              <img
                src="/images/spa-treatment-photo.jpg"
                alt="Spa treatment at Aqua Skin &amp; Body Studio"
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

          <div className="staff-grid">

            {/* Tara Pennington */}
            <div className="staff-card">
              <div className="staff-photo-wrap">
                <img src="/images/tara-pennington.jpg" alt="Tara Pennington" className="staff-photo" />
              </div>
              <div className="staff-info">
                <h3 className="staff-name">Tara Pennington</h3>
                <p className="staff-title">Licensed Master Aesthetician, Certified Medical Assistant</p>
                <p>
                  Tara is a Licensed Master Aesthetician and Certified Medical Assistant with
                  over 10 years of specialized experience in medical and cosmetic dermatology.
                  She received her foundational aesthetics training at the Euro Institute of
                  Skin Care and advanced medical esthetics training at the Washington Laser
                  Institute, along with her medical assisting education from Pima Medical
                  Institute, Seattle.
                </p>
                <p>
                  Tara has treated a wide variety of skin types and conditions using
                  cutting-edge technologies, including multiple lasers for rejuvenation and
                  resurfacing, chemical peels, microneedling (including RFMN), HydraFacials,
                  regenerative aesthetics, laser hair removal, and other state-of-the-art
                  cosmetic devices. Before focusing full-time on aesthetics, she worked
                  alongside leading Seattle-area dermatologists, including Dr. Sarah E. Dick
                  and Dr. Renata M. Jenkin at Madrona Dermatology, as a Certified Medical
                  Assistant, Mohs surgical technician at Skin Surgery Center, and in dual
                  roles at Newvue Plastic Surgery. This clinical foundation gave her deep
                  expertise in both medical and cosmetic dermatology practices.
                </p>
                <p>
                  Passionate about delivering exceptional, personalized care, Tara creates
                  tailored treatment plans that blend premium skincare regimens with the
                  latest technology. Her clinical specialties include hyperpigmentation,
                  acne management, anti-aging, vascular concerns, unwanted hair or hair
                  restoration, scarring, and stretch marks.
                </p>
                <p>
                  A lifelong Pacific Northwest native who grew up in Edmonds, Tara is excited
                  to bring her expertise to the Mukilteo community. In her free time, she
                  enjoys writing music, reading, and spending quality time in nature with her
                  son. Tara's schedule at Aqua is typically 3 to 4 days a week, by
                  appointment only.
                </p>
              </div>
            </div>

            {/* Rachel Phillips */}
            <div className="staff-card">
              <div className="staff-photo-wrap">
                <img src="/images/rachel-phillips.jpeg" alt="Rachel Phillips" className="staff-photo" />
              </div>
              <div className="staff-info">
                <h3 className="staff-name">Rachel Phillips</h3>
                <p className="staff-title">Licensed Master Aesthetician, Founder</p>
                <p>
                  Rachel Phillips brings over 30 years of experience in prestige cosmetic
                  retail, medical aesthetics, spa and wellness. Her expertise spans skincare,
                  aesthetic lasers, injectables, dermatology, pharmaceuticals, medical
                  devices, and skin cancer oncology. Throughout her career, she has earned
                  numerous awards and served on advisory boards for leading companies
                  including SkinMedica, Alastin, Sun Pharma, Revance Aesthetics, and
                  HydroPeptide.
                </p>
                <p>
                  While living in Los Angeles, Rachel attended the Make-up Designory (MUD),
                  earning her credentials to work within the union. She is also a licensed
                  Master Aesthetician, having graduated from the Euro Institute of Skin Care
                  in 2000. Her medical career began in dermatology and plastic surgery
                  practices before transitioning into medical aesthetic sales in 2004. She
                  first met Denise Leger Turner while working with the Virginia Mason
                  MediSpa nearly two decades ago, and was thrilled when the opportunity came
                  to take over the studio.
                </p>
                <p>
                  For the past 22 years, Rachel has excelled as an award-winning aesthetic
                  and pharmaceutical sales representative and in-field trainer, traveling
                  nationwide to educate practices. Rachel continues to work full time as an
                  Account Manager in Skin Cancer Oncology, and you can book with her
                  typically 1 to 2 Saturdays a month, by appointment only.
                </p>
                <p>
                  Outside of work, Rachel enjoys cheering on the Seahawks, walking her two
                  long-haired mini dachshunds along the Kirkland waterfront, and spending
                  time with her family. She is passionate about skin cancer prevention and
                  actively supports ovarian and breast cancer research. Her favorite weekend
                  indulgence? Brunch and spa treatments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Overview;
