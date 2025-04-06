import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <SectionOne/>
      <SectionThree/>
      <SectionFive/>
      <SectionTwo/>
      <SectionFour/>
    </div>
  );
}

export default App;