import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import navbarStyle from './styling/Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility on button click
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Handle sign-in redirection with state
  const handleSignIn = (role) => {
    navigate('/signin', { state: { role } }); // Pass role as state
    setDropdownOpen(false); // Close dropdown after clicking a role
  };

  // Close dropdown when clicking outside of it
  const handleClickOutside = (e) => {
    // Close dropdown if click happens outside of authLinks container
    if (!e.target.closest(`.${navbarStyle.authLinks}`)) {
      setDropdownOpen(false);
    }
  };

  // Add event listener for clicks outside dropdown
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside); // Cleanup event listener
    };
  }, []);

  return (
    <div className={navbarStyle.navbar}>
      <nav className={navbarStyle.container}>
        {/* Logo */}
        <div className={navbarStyle.logo}>Learnzilla</div>

        {/* Auth Buttons */}
        <div className={navbarStyle.authLinks}>
          {/* Button to toggle dropdown */}
          <button 
            className={navbarStyle.navButton}
            onClick={toggleDropdown}
          >
            Sign In
          </button>

          {/* Dropdown menu for sign-in options */}
          <div className={`${navbarStyle.dropdown} ${dropdownOpen ? navbarStyle.show : ''}`}>
            <button onClick={() => handleSignIn('Student')}>
              As Student
            </button>
            <hr />
            <button onClick={() => handleSignIn('Teacher')}>
              As Teacher
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
