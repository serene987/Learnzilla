import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SData } from './SData.jsx';
import './teacher.css';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        {/* Menu Button (Toggles Sidebar) */}
        <button className="menu-button" onClick={toggleSidebar}>
          {sidebar ? <AiOutlineClose /> : <FaBars />}
        </button>

        {/* Logo Centered */}
        <div className="logo">Learnzilla</div>

        {/* Auth Button */}
        <button className="nav-button">Sign Out</button>
      </div>

      {/* Sidebar */}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {/* Close Button */}
          <li className="navbar-toggle">
            <button className="close-button" onClick={closeSidebar}>
              <AiOutlineClose />
            </button>
          </li>
          {SData.map((item, index) => (
            <li key={index} className={item.cName} onClick={(e) => e.stopPropagation()}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
