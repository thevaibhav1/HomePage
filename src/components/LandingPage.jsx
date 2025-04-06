import React from "react";
import "./LandingPage.css";
import Card1 from "./Card1";
const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='content-container'>
        <div className='left-section'>
          <h1>We take care of ALL your business compliance needs</h1>
          <h2 className="h2h">
            <span className='highlight'>RegisterKaro</span>
          </h2>
          <p>
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, registrations, tax filings, and
            other legal matters.
          </p>
          <button className='get-started-btn'>Get Started</button>
        </div>
        <div className='right-section'>
          <div className='stats'>
            <Card1 heading={'500+'} text={'Businesses Incorporated Every Month'}/>
            <Card1 heading={'20,000+'} text={'Clients all over India'}/>
            <Card1 heading={'250+'} text={'Professionals Network'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
