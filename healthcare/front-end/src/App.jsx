/* eslint-disable no-unused-vars */
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import Services from './pages/Services';
import Contact from './pages/Contact.jsx';
import Index from './pages/Index.jsx';
import Charts from './components/EmotionBarChart.jsx';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Charts" element={<Charts />} />
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
