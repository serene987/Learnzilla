import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData.jsx';
import { IconContext } from 'react-icons';
import styles from '../components/styling/Sidenavbar.module.css';

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
        <div className={styles.menuBars} onClick={showSidebar}>
          <FaIcons.FaBars />
        </div>

        {/* Sidebar Navigation */}
        <nav className={sidebar ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <ul className={styles.navMenuItems}>
            {/* Close Button */}
            <li className={styles.navbarToggle} onClick={showSidebar}>
              <AiIcons.AiOutlineClose className={styles.menuBars} />
            </li>

            {/* Sidebar Links */}
            {SidebarData.map((item, index) => (
              <li key={index} className={styles[item.cName] || ''}>
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
