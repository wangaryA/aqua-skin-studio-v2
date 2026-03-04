import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

function Experience() {
  return (
    <section className="experience-simple" id="experience">
      <div className="container">
        <div className="experience-layout">
          <div className="experience-image">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=500&fit=crop"
              alt="Serene spa interior"
            />
          </div>

          <div className="experience-text">
            <h2>Why Choose Aqua</h2>
            <p>
              Aqua Skin & Body Studio is a serene, boutique retreat where advanced skincare
              meets restorative body therapy. We offer something rare in today's fast-paced
              beauty world — unhurried, high-touch care rooted in science, expertise, and
              genuine connection.
            </p>
            <ul className="experience-pillars">
              <li><strong>30+ Years of Expertise</strong> — Three decades of advanced aesthetic mastery shape every service.</li>
              <li><strong>Intimate & Calm</strong> — No crowded waiting rooms. No rushed appointments. Just a quiet, private sanctuary.</li>
              <li><strong>Results-Driven Rituals</strong> — Clinical-grade skincare blended with sensory indulgence.</li>
              <li><strong>Whole-Body Wellness</strong> — Facials and massage therapy together for skin, body, and nervous system harmony.</li>
              <li><strong>Elevated Client Care</strong> — Every guest is welcomed like a VIP, with personalized recommendations and a high-touch experience.</li>
            </ul>
            <Link to="/overview" className="text-link">Learn our story →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
