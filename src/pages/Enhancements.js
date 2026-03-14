import React from 'react';
import { Link } from 'react-router-dom';
import './Enhancements.css';

const enhancements = [
  {
    category: 'Facial Enhancements',
    note: 'Add any of the following to enhance your facial treatment.',
    items: [
      { name: 'Facial Waxing — Lip, Brow, or Chin', price: '$25 per area' },
      { name: 'LED Red Light Treatment', price: '$25' },
      { name: 'Lash or Brow Tint', price: '$50 each' },
      { name: 'Dermaplane Add-On', price: '$30' },
      { name: 'Additional Extractions', price: '$25' }
    ]
  },
];

function Enhancements() {
  return (
    <div className="page-wrapper">
      <section className="enhancements-hero">
        <div className="container">
          <h1>Enhancements</h1>
          <p className="subtitle">Add-On Services</p>
        </div>
      </section>

      <section className="enhancements-list-section">
        <div className="container">
          {enhancements.map((category, index) => (
            <div key={index} className="enhancement-category">
              <h2>{category.category}</h2>
              {category.note && <p className="enhancement-cat-note">{category.note}</p>}
              <div className="enhancement-items">
                {category.items.map((item, i) => (
                  <div key={i} className="enhancement-row">
                    <span className="enhancement-name">{item.name}</span>
                    <span className="enhancement-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="enhancements-cta">
        <div className="container">
          <h2>Add an Enhancement to Your Next Visit</h2>
          <p>
            Mention any add-ons when booking and we'll incorporate them seamlessly into your appointment.
          </p>
          <Link to="/appointments" className="btn btn-primary">Book Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Enhancements;
