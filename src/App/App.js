import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddManga from '../components/AddManga/AddManga';
// import HomePage from '../pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" component={AddManga} />
          {/* Add more routes for different pages here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
