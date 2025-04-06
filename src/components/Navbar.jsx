import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo"></div>
        <span className="navbar-title">RegisterKaro</span>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Startup <span className="dropdown-arrow"></span></li>
        <li className="navbar-item">Blog</li>
        <li className="navbar-item">Contact Us</li>
        <li className="navbar-item">About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
