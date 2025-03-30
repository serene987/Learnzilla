import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Index from './Index.jsx';
import SignIn from './components/SignIn.jsx';
import Register from './components/Register.jsx';

// importing all styles here
import './index.css';


function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Index />}
        />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
