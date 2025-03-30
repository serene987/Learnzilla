import { Routes, Route } from 'react-router-dom';

import Index from './Index.jsx';
import SignIn from './components/SignIn.jsx';

import Teacherdashboard from './pages/teacher/Teacherdashboard.jsx';
import Attendance from './pages/teacher/Attendace.jsx';
import Myclasses from './pages/teacher/Myclasses.jsx';
import Mystudents from './pages/teacher/Mystudents.jsx';

import Home from './pages/student/Home.jsx';
import Myattendance from './pages/student/Myattendance.jsx';
import ClassDetails from './pages/student/ClassDetails.jsx';
import Class from './pages/student/Class.jsx';
import Support from './pages/student/Support.jsx';

import './index.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>

      <Routes>
        <Route path='/teacherdashboard' element = {<Teacherdashboard/>} />
        <Route path='/markattendance' element = {<Attendance/>}/>
        <Route path='/mystudents' element = {<Mystudents/>} />
        <Route path='/myclasses' element = {<Myclasses/>} />
      </Routes>

      <Routes>
        <Route path='/myhome' element = {<Home/>}/>
        <Route path='/myattendance' element = {<Myattendance/>}/>
        <Route path='/classdetails' element = {<ClassDetails/>}/>
        <Route path='/classes' element = {<Class/>}/>
        <Route path='/support' element = {<Support/>}/>
      </Routes>
    </>
  );
}

export default App;
