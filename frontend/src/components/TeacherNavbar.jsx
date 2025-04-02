import { useState } from 'react';

import navStlye from './styling/teacher/Navbar.module.css';
import TeacherSideNavbar  from './TeacherSideNavbar.jsx';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = () => setSidebar(false);

  return (
    <>
      {/* Navbar */}
      <div className={navStlye.navbar}>

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
