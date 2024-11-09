/* eslint-disable no-unused-vars */
// SignUp.jsx
import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [usersList, setUsersList] = useState([]); // List to store user data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsersList([...usersList, userDetails]); // Append new user data to the list
    console.log('Users List:', usersList); // Log for debugging
    setUserDetails({ email: '', username: '', password: '' }); // Reset form fields
    alert('Account created successfully!');
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={userDetails.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={userDetails.username}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={userDetails.password}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
