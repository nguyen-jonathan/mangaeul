// import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={HomePage} />
        {/* Add more routes for different pages here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
