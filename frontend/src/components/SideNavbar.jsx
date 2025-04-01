import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData.jsx';
import { IconContext } from 'react-icons';
import '../components/styling/Sidenavbar.css'

function SideNavbar({ toggleSidebar }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    toggleSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* Menu Icon */}
        <div className="menu-bars" onClick={showSidebar}>
          <FaIcons.FaBars />
        </div>

        {/* Sidebar Navigation */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            {/* Close Button */}
            <li className="navbar-toggle" onClick={showSidebar}>
              <AiIcons.AiOutlineClose className="menu-bars" />
            </li>

            {/* Sidebar Links */}
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNavbar;
