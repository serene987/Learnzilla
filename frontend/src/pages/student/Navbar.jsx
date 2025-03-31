import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { NavbarData } from './NavbarData.jsx';
import './student.css';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <button className="menu-button" onClick={toggleSidebar}>
          {sidebar ? <AiOutlineClose /> : <FaBars />}
        </button>

        <div className="logo">Learnzilla</div>

        <button className="nav-button">Log Out</button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebar ? "show" : ""}`}>
        <ul className="sidebar-items">
          {NavbarData.map((item, index) => (
            <li key={index} className="sidebar-item" onClick={closeSidebar}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close sidebar on click */}
      {sidebar && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;
