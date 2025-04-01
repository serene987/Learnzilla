import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import navStlye from './styling/teacher/Tnavbar.module.css';
import { TeacherSidebarData } from './TeacherSidebarData.jsx';
import TeacherSideNavbar  from './TeacherSideNavbar.jsx';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = () => setSidebar(false);

  return (
    <>
      {/* Navbar */}
      <div className={navStlye.navbar}>
        {/* <button className={navStlye.menuButton} onClick={toggleSidebar}>
          {sidebar ? <AiOutlineClose /> : <FaBars />}
        </button> */}

        <div className={navStlye.logo}>Learnzilla</div>

        <button className={navStlye.navButton}>Log Out</button>
      </div>

      {/* Sidebar */}
      <TeacherSideNavbar/>

      {/* Overlay to close sidebar on click */}
      {sidebar && <div className={navStlye.overlay} onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;
