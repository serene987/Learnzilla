import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { NavbarData } from './NavbarData.jsx';
import SideNavbar from './SideNavbar.jsx';
import NavbarStyle from './styling/student/SNavbar.module.css';

const StudentNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <>
      {/* Navbar */}
      <div className={NavbarStyle.navbar}>

        <div className={NavbarStyle.logo}>Learnzilla</div>

        <button className={NavbarStyle.navButton}>Log Out</button>
      </div>

      {/* Sidebar */}
      <SideNavbar/>

      {/* Overlay to close sidebar on click */}
      {sidebar && <div className={NavbarStyle.overlay} onClick={closeSidebar}></div>}
    </>
  );
};

export default StudentNavbar;
