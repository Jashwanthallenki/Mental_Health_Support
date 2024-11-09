// App.js
import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Login />
      </div>
    </div>
  );
}

export default App
