import React from 'react';
import './SectionOne.css';

const SectionOne = () => {
  const services = [
    { title: 'Company Formation'  },
    { title: 'Company Secretarial Services'  },
    { title: 'Virtual Office Address'  },
    { title: 'Annual Compliance Services'  },
    { title: 'VAT Registration, Preparation & Filing'  },
    { title: 'Payroll Services' },
    { title: 'Bookkeeping Services'  },
    { title: 'Live Online Webinars & Workshops'  },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;