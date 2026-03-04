import React from 'react';
import { Link } from 'react-router-dom';
import './SkinAnalysis.css';

function SkinAnalysis() {
  return (
    <section className="about-section" id="skin-analysis">
      <div className="container">
        <div className="about-content">
          <p className="about-text">
            Welcome to Aqua Skin & Body Studio — a boutique sanctuary for luxurious facials,
            restorative massage therapy, and personalized skin wellness. Nestled in an intimate,
            calming setting, Aqua was created for those who crave both results and relaxation.
            Every treatment is thoughtfully designed to elevate your skin, soothe your body,
            and restore your sense of balance.
          </p>
          <p className="about-text">
            With over 30 years of experience in advanced aesthetics, we combine clinical
            expertise with a luxury touch to deliver customized facials, targeted skin
            therapies, and deeply therapeutic massage sessions. Your experience is always
            tailored just for you — because at Aqua, luxury is personal.
          </p>
          <Link to="/overview" className="text-link">Learn more about us →</Link>
        </div>
      </div>
    </section>
  );
}

export default SkinAnalysis;
