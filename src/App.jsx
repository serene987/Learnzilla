import './App.css';
import Index from './Index';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/student/Home.jsx'
import Classes from './pages/student/Classes.jsx'
import ClassDetails from './pages/student/ClassDetails.jsx'
import Support from './pages/student/Support.jsx'
import Attendance from './pages/student/Attendance.jsx'

// import Topnav from './components/topnav/Topnav.jsx'



function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/class/:id' element={<ClassDetails/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
        </Routes>
      </div>
      <Index/>
    </>
  );
}

export default App;