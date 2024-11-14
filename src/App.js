// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
import ParkingHistory from './Components/ParkingHistory';
import ParkingDetection from './Components/ParkingDetection';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/history" element={<ParkingHistory />} />
        <Route path="/parkdetect" element={<ParkingDetection/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
};

export default App;
