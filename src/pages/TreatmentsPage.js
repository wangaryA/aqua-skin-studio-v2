import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TreatmentsPage.css';

const treatments = [
  {
    category: 'HydroPeptide Luxury Facials',
    note: 'Each treatment includes a personalized consultation, customized care of face, neck, and chest, and a post-treatment plan.',
    items: [
      {
        name: 'HydroLUXE Oxygen Facial',
        duration: '50 min',
        price: '$175',
        description: 'An energizing, oxygen-infused facial that revitalizes dull, fatigued skin and restores a fresh, luminous glow. This treatment pairs gentle exfoliation with HydroPeptide\'s advanced oxygenation technology to boost cellular vitality, brighten tone, and smooth texture. A peptide-rich infusion mask plus RED LED light deeply hydrates and firms while targeted serums enhance radiance and elasticity. Skin feels refreshed, oxygenated, and beautifully renewed.'
      },
      {
        name: 'HydroGLOW VIT C Brightening Facial',
        duration: '50 min',
        price: '$175',
        description: 'A brightening, peptide-rich facial designed to restore radiance, refine texture, and leave the skin visibly luminous. This treatment blends gentle exfoliation, potent Vitamin C delivery, and HydroPeptide\'s advanced peptide technology to smooth, firm, and even the complexion. A hydrating infusion mask replenishes moisture while targeted serums boost elasticity and glow. Skin emerges refreshed, plump, and lit-from-within.'
      },
      {
        name: 'HydroQUENCH Moisture Infusion Facial',
        duration: '50 min',
        price: '$175',
        description: 'A deeply replenishing facial that drenches the skin in multi-weight hyaluronic acid, restorative peptides, and barrier-strengthening actives. Gentle exfoliation smooths the surface before a concentrated hydration mask delivers long-lasting moisture and visible plumping. Targeted serums reinforce elasticity and calm the complexion, leaving skin supple, dewy, and comfortably nourished.'
      },
      {
        name: 'HydroPURE Purifying Facial',
        duration: '50 min',
        price: '$175',
        description: 'This refining facial quickly addresses skin texture and tone concerns without compromising the natural moisture barrier. A potent dose of acne-targeting salicylic acid, antioxidants, and patented anti-microbial peptide technology instantly smooths dullness and increases skin clarity. Extra time is allocated for extractions within this treatment.'
      },
      {
        name: 'The Back Treatment',
        duration: '50 min',
        price: '$175',
        description: 'Our customized back facial targets those hard-to-reach areas to clear clogged pores, reduce pigmentation, and treat acne. Includes deep cleansing, light chemical peel, extractions, and a customized mask with LED therapy. After your session, you\'ll notice visibly healthier, glowing skin — hydrated with a smoother, more even skin tone.'
      }
    ]
  },
  {
    category: 'Diamond Glow by SkinMedica',
    note: 'DiamondGlow® delivers revolutionary skin transformation through patented 3-in-1 technology that simultaneously exfoliates, extracts, and infuses professional-grade serums. This advanced facial treatment uses precision diamond-tip resurfacing to reveal instantly brighter, smoother, and more radiant skin with zero downtime.',
    subnote: 'Face, neck, and chest treated with each session.',
    items: [
      { name: 'Diamond Glow Express', duration: '30 min', price: '$180', description: '' },
      { name: 'Diamond Glow LUXE Facial', duration: '50 min', price: '$200', description: '' }
    ]
  },
  {
    category: 'Lash Luxuries',
    items: [
      { name: 'Lash Lift and Tint', price: '$140', description: '' },
      { name: 'Brow Lamination with Wax and Tint', price: '$120', description: '' }
    ]
  },
  {
    category: 'Advanced Treatments',
    items: [
      { name: 'Dr. Pen Micro Needling + Custom Skin Booster', price: '$200–$400', description: '' },
      { name: 'BioRePeel Glass Skin Peel', price: '$175', description: '' },
      { name: 'SkinMedica Vitalize Peel', price: '$175', description: '' }
    ]
  }
];

function TreatmentsPage() {
  const [openItems, setOpenItems] = useState({});

  const toggle = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="page-wrapper">
      <section className="treatments-page-hero">
        <div className="container">
          <h1>Our Treatments</h1>
          <p className="subtitle">Advanced Skincare Tailored to You</p>
        </div>
      </section>

      <section className="treatments-page-content">
        <div className="container">
          <div className="treatments-intro">
            <p>
              Every treatment at Aqua Skin &amp; Body Studio begins with a thorough skin
              consultation to ensure we address your unique concerns with precision and care.
            </p>
          </div>

          {treatments.map((category, index) => (
            <div key={index} className="treatment-category">
              <h2>{category.category}</h2>
              {category.note && <p className="category-note">{category.note}</p>}
              {category.subnote && <p className="category-subnote">{category.subnote}</p>}
              <div className="treatment-list">
                {category.items.map((treatment, i) => {
                  const key = `${index}-${i}`;
                  const isOpen = !!openItems[key];
                  const hasDesc = !!treatment.description;
                  return (
                    <div
                      key={i}
                      className={`treatment-item ${isOpen ? 'open' : ''} ${hasDesc ? 'expandable' : ''}`}
                      onClick={() => hasDesc && toggle(key)}
                    >
                      <div className="treatment-header">
                        <h3>{treatment.name}</h3>
                        <div className="treatment-meta">
                          {treatment.duration && <span className="duration">{treatment.duration}</span>}
                          <span className="price">{treatment.price}</span>
                          {hasDesc && (
                            <span className={`treatment-toggle ${isOpen ? 'open' : ''}`}>+</span>
                          )}
                        </div>
                      </div>
                      {hasDesc && (
                        <div className={`treatment-description ${isOpen ? 'open' : ''}`}>
                          <p>{treatment.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="treatments-note">
            <h3>Good to Know</h3>
            <ul>
              <li>All facial treatments include a complimentary skin consultation</li>
              <li>Please arrive 10 minutes before your scheduled appointment</li>
              <li>Facial enhancements (LED, dermaplane, extractions) available as add-ons</li>
              <li>Contact us to discuss which treatment is right for your skin goals</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="treatments-cta">
        <div className="container">
          <h2>Ready to Transform Your Skin?</h2>
          <p>Book your appointment and start your journey to healthier, more radiant skin.</p>
          <Link to="/appointments" className="btn btn-primary">Book Now</Link>
        </div>
      </section>
    </div>
  );
}

export default TreatmentsPage;
