import React from 'react';
import './SectionThree.css';

const SectionThree = () => {
  const features = [
    { title: 'Affordable' },
    { title: 'Compliance Ensured' },
    { title: 'Simplified Process' },
    { title: 'On-time Service' },
    { title: 'Instant Response' },
    { title: 'Industry Experts' },
  ];

  return (
    <div className="why-choose-us-container">
      <h2>WHY CHOOSE US</h2>
      <p>
        Our All-in-One Platform And Team Of Experts Will Help Direct You in The
        Right Path And Ensure That Your Business Starts The Right Way In Record
        Time.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-title">{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;