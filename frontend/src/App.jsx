import { Routes, Route } from 'react-router-dom';

import Index from './Index.jsx';
import SignIn from './components/SignIn.jsx';

import Teacherdashboard from './pages/teacher/Teacherdashboard.jsx';
import Attendance from './pages/teacher/Attendace.jsx';
import ManageCourses from './pages/teacher/ManageCourses.jsx';
import Assignments from './pages/teacher/Assignments.jsx';
import ViewClass from './pages/teacher/ViewClass.jsx';

import Home from './pages/student/Home.jsx';
import Myattendance from './pages/student/Myattendance.jsx';
import ClassDetails from './pages/student/ClassDetails.jsx';
import Class from './pages/student/Class.jsx';
import Support from './pages/student/Support.jsx';

import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      
      {/* Sign In */}
      <Route path='/signin' element={<SignIn />} />

      {/* Teacher Dashboard */}
      <Route path='/teacherdashboard' element={<Teacherdashboard />} />
      <Route path='/markattendance/:courseId' element={<Attendance />} />
      <Route path='/assignments/:courseId' element={<Assignments />} />
      <Route path='/managecourses' element={<ManageCourses />} />
      <Route path='/viewclass' element={<ViewClass />} />

      {/* Student Dashboard */}
      <Route path='/myhome' element={<Home />} />
      <Route path='/myattendance' element={<Myattendance />} />
      <Route path='/classdetails/:courseId' element={<ClassDetails />} />
      <Route path='/classes' element={<Class />} />
      <Route path='/support' element={<Support />} />
    </Routes>
  );
}

export default App;
