import './App.css';
import SideNavbar from './components/sidenav/SideNavbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import Topnav from './components/topnav/Topnav.jsx'

import Home from './Student/pages/Home.jsx';
import Classes from './Student/pages/Classes.jsx';
import Attendance from './Student/pages/Attendance.jsx';
import Support from './Student/pages/Support.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <SideNavbar />
        <Routes>
            <Route path='/' exact component={<Home/>}/>
            <Route path='/classes' component={<Classes/>} />
            <Route path='/attendance' component={<Attendance/>} />
            <Route path='/support' component={<Support/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;