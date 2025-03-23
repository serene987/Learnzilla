import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import navbarStyle from '../../components/styling/Navbar.module.css';

const Navbar = () => {
  
  return (
    <div className={navbarStyle.navbar}>
      <nav className={navbarStyle.container}>
        {/* Logo */}
        <div className={navbarStyle.logo}>Learnzilla</div>

        {/* Auth Buttons */}
        <div className={navbarStyle.authLinks}>
          {/* Button to toggle dropdown */}
          <button 
            className={navbarStyle.navButton}>
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
