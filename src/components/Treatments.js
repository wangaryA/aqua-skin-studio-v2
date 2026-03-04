import React from 'react';
import { Link } from 'react-router-dom';
import './Treatments.css';

function Treatments() {
  const treatments = [
    {
      name: 'Customized Facial',
      description: 'Tailored to your unique skin needs with deep cleansing, exfoliation, and nourishing serums.'
    },
    {
      name: 'Anti-Aging Treatment',
      description: 'Collagen-boosting therapy with peptides and microcurrent to restore youthful vitality.'
    },
    {
      name: 'HydraFacial',
      description: 'Advanced hydradermabrasion for deep hydration and instant radiance.'
    },
    {
      name: 'Chemical Peels',
      description: 'Professional-grade exfoliation to address pigmentation, texture, and fine lines.'
    },
    {
      name: 'Microneedling',
      description: 'Collagen induction therapy for improved texture, firmness, and scar reduction.'
    },
    {
      name: 'LED Light Therapy',
      description: 'Non-invasive treatment using specific wavelengths for anti-aging and acne.'
    }
  ];

  return (
    <section className="treatments-simple" id="treatments">
      <div className="container">
        <h2>Our Treatments</h2>

        <div className="treatments-list-simple">
          {treatments.map((treatment, index) => (
            <div key={index} className="treatment-row">
              <h3>{treatment.name}</h3>
              <p>{treatment.description}</p>
            </div>
          ))}
        </div>

        <div className="treatments-link">
          <Link to="/treatments" className="text-link">View all treatments & pricing →</Link>
        </div>
      </div>
    </section>
  );
}

export default Treatments;
