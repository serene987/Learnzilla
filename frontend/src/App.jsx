import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Index from './Index.jsx';
import SignIn from './components/SignIn.jsx';
import Register from './components/Register.jsx';
import Home from './pages/student/Home.jsx'; // ✅ Import Home component
import './styles/global.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Index darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/home" element={<Home />} /> {/* ✅ Added route */}
      </Routes>
    </>
  );
}

export default App;
