import { Routes, Route } from 'react-router-dom';

// import Index from './Index.jsx';
// import SignIn from './components/SignIn.jsx';
// import Register from './components/Register.jsx';
import TeacherDash from './TeacherDash';
import Attendance from './pages/teacher/Attendace.jsx';
import Myclasses from './pages/teacher/Myclasses.jsx';
import Mystudents from './pages/teacher/Mystudents.jsx';

import './index.css';


function App() {


  return (
    <>
      <Routes>
        {/* <Route
          path='/'
          element={<Index/>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} /> */}

        <Route path='/markattendance' />
        <Route path='/mystudents' />
        <Route path='/myclasses' />
        <Route path='/support' />
      </Routes>
      
      <TeacherDash/>
    </>
  );
}

export default App;
