import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  {
    name: 'Power Serum',
    tagline: 'Anti-Wrinkle Multi-Peptide Serum',
    description: 'A potent serum with 6 peptide complexes and hyaluronic acid that radically improves tone, texture, fine lines, and wrinkles for visibly lifted, transformed skin.',
    image: 'https://static.thcdn.com/productimg/original/11287832-5405261390608431.jpg',
    features: ['6 Peptide Complexes', 'Hyaluronic Acid', 'Line-Lifting']
  },
  {
    name: 'PolyPeptide Collagel+ Eye Masks',
    tagline: 'Line-Lifting Hydrogel Eye Treatment',
    description: 'Hydrogel under-eye patches infused with collagen protein, aloe, and caviar extract to firm, brighten, and de-puff the under-eye area in one treatment.',
    image: 'https://static.thcdn.com/productimg/original/11623182-2205261390954787.jpg',
    features: ['Firms & Brightens', 'Reduces Dark Circles', '8 Treatments']
  },
  {
    name: 'Pre-Treatment Toner',
    tagline: 'Balance, Exfoliate & Brighten',
    description: 'An age-defying toner that preps skin for optimal product absorption while balancing, exfoliating, and brightening for a more radiant complexion.',
    image: 'https://static.thcdn.com/productimg/original/11287842-6825261845474836.jpg',
    features: ['Brightening', 'Exfoliating', 'Balancing']
  },
  {
    name: 'Face Lift Moisturizer',
    tagline: 'Advanced Ultra-Light Moisturizer',
    description: 'A featherlight daily moisturizer packed with peptides and antioxidants to plump, protect, and perfect skin while delivering an immediate lifting effect.',
    image: 'https://static.thcdn.com/productimg/original/11294249-9735261391188850.jpg',
    features: ['Ultra-Lightweight', 'Peptide-Powered', 'Daily Wear']
  },
  {
    name: '5X Power Peel',
    tagline: 'Daily Resurfacing Treatment Pads',
    description: 'Pre-soaked resurfacing pads with 5 exfoliating acids and peptides to smooth texture, minimize pores, and reveal a brighter, more even complexion with daily use.',
    image: 'https://static.thcdn.com/productimg/original/11287821-1225261389771149.jpg',
    features: ['5 Acids + Peptides', 'Pore-Minimizing', '30 Pads']
  },
  {
    name: 'Cleansing Gel',
    tagline: 'Cleanse, Tone & Remove Makeup',
    description: 'A gentle yet thorough peptide-infused cleanser that removes makeup, dirt, and excess oil without stripping the skin — leaving it balanced, refreshed, and prepped.',
    image: 'https://static.thcdn.com/productimg/original/11287824-7215261390097951.jpg',
    features: ['Makeup Remover', 'Peptide-Infused', 'All Skin Types']
  }
];

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

      {/* Brand Header */}
      <section className="brand-header">
        <div className="container">
          <div className="brand-header-inner">
            <div className="brand-header-text">
              <h2>HydroPeptide</h2>
              <p>
                Luxury anti-aging skincare powered by patented peptide technology.
                HydroPeptide harnesses the science of epigenetics to visibly reduce
                the signs of aging — delivering transformative results with every use.
              </p>
              <p className="affiliate-coming-soon">Shop link coming soon — affiliate store launching shortly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid products-grid-3">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <p className="product-brand-tag">HydroPeptide</p>
                  <h3>{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p>{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Rogers Brand */}
      <section className="dr-rogers-section">
        <div className="container">
          <div className="dr-rogers-inner">
            <div className="dr-rogers-text">
              <h2>Doctor Rogers Skin Care</h2>
              <p className="dr-rogers-tagline">Credible. CLEAN. <em>Uncompromising.</em></p>
              <p>
                Nationally-acclaimed, procedural dermatologist, trusted skincare expert,
                and founder of Doctor Rogers Skin Care, Dr. Heather D. Rogers, MD is known
                for her no-nonsense advice. After seeing countless patients struggle with
                irritation and damage caused by overcomplicated, overhyped skincare, she
                decided to create something better — clean, hypoallergenic essentials
                powered by decades of clinical experience and proven bioactives that help
                skin perform at its best.
              </p>
              <p>
                With uncompromising standards for efficacy and ingredient integrity,
                Doctor Rogers Skin Care helps people <em>age well</em>, with confidence
                and ease.
              </p>
              <p className="affiliate-coming-soon">Shop link coming soon — affiliate store launching shortly.</p>
            </div>
            <div className="dr-rogers-image">
              <img src="/images/doctor-rogers.png" alt="Dr. Heather Rogers with Doctor Rogers Skin Care products" />
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
