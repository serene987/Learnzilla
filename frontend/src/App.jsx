import { Routes, Route } from 'react-router-dom';

import Index from './Index.jsx';
import SignIn from './components/SignIn.jsx';

import Teacherdashboard from './pages/teacher/Teacherdashboard.jsx';
import Attendance from './components/MarkAttendace.jsx';
import ManageCourses from './components/ManageCourses.jsx';
import Assignments from './components/GiveAssignments.jsx';
import ViewClass from './pages/teacher/ViewClass.jsx';

import Home from './pages/student/Home.jsx';
import Class from './components/Class.jsx';
import StudentAssignments from './components/Assignments.jsx';
import StudentGrades from './components/Grades.jsx';
import StudentAnnouncements from './components/Announcement.jsx';
import StudentAttendance from './components/Myattendance.jsx'; 


import './index.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Index />} />
      
      {/* Sign In */}
      <Route path='/signin' element={<SignIn />} />

      {/* Teacher Dashboard */}
      <Route path='/teacherdashboard' element={<Teacherdashboard />} />
      <Route path='/markattendance/:id' element={<Attendance />} />
      <Route path='/giveassignments/:id' element={<Assignments />} />
      <Route path='/teacherdashboard' element={<ManageCourses />} />
      <Route path='/viewclass/:id' element={<ViewClass />} />

      {/* Student Dashboard */}
      <Route path='/myhome' element={<Home />} />
      <Route path='/myattendance' element={<StudentAttendance />} />
      <Route path='/classes' element={<Class />} />
      <Route path='/assignments' element={<StudentAssignments />} />
      <Route path='/grades' element={<StudentGrades />} />
      <Route path='/annoucements' element={<StudentAnnouncements />} />
    </Routes>
    </>
  );
}

export default App;
