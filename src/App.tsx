import React from 'react';
import FirstScreen from './Screens/FirstScreen/FirstScreen';
import SecondScreen from './Screens/SecondScreen/SecondScreen';
import { Routes, Route } from 'react-router-dom';
import "./App.scss";

function App() {
  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<FirstScreen />} />
        <Route path='/enter-code' element={<SecondScreen />} />
      </Routes>
    </div>
  );
}

export default App;
