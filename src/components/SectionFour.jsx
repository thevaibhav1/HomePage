import React from 'react';
import './SectionFour.css';

const SectionFour = () => {
  const sections = [
    {
      title: 'START A BUSINESS',
      items: [
        'Private Limited Company',
        'Limited Liability Partnership',
        'One Person Company',
        'Section 8 Company Registration',
        'Nidhi Company Registration',
        'Producer Company Registration',
        'MSME Registration',
      ],
    },
    {
      title: 'GOVERNMENT REGISTRATION',
      items: [
        'FSSAI Registration',
        'IEC Registration',
        'Trademark Registration',
        'DSC Registration',
      ],
    },
    {
      title: 'COMPLIANCE & TAX',
      items: [
        'Compliance Pvt Ltd',
        'Compliance LLP',
        'GST Registration',
      ],
    },
    {
      title: 'BIS & CDSO',
      items: [
        'BIS Certification',
        'BIS FMCS Certification',
        'BIS CRS Certification',
        'ISI Mark Certification',
        'CDSO Registration',
        'Medical Device Registration',
      ],
    },
  ];

  return (
    <div className="services-container">
      {sections.map((section, index) => (
        <div key={index} className="service-column">
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SectionFour;