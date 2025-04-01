import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SData } from './SData.jsx';
import navStlye from './styling/teacher/Tnavbar.module.css';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <>
      {/* Navbar */}
      <div className={navStlye.navbar}>
        <button className={navStlye.menuButton} onClick={toggleSidebar}>
          {sidebar ? <AiOutlineClose /> : <FaBars />}
        </button>

        <div className={navStlye.logo}>Learnzilla</div>

        <button className={navStlye.navButton}>Sign Out</button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebar ? "show" : ""}`}>
        <ul className={navStlye.sidebarItems}>
          {SData.map((item, index) => (
            <li key={index} className={navStlye.sidebar-item} onClick={closeSidebar}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close sidebar on click */}
      {sidebar && <div className={navStlye.overlay} onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;
