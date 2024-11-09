/* eslint-disable no-unused-vars */
// Login.js
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isUser, setIsUser] = useState(true);

  return (
    <div className="login-container">
      <div className="role-toggle">
        <button
          className={`toggle-button ${isUser ? 'active' : ''}`}
          onClick={() => setIsUser(true)}
        >
          User
        </button>
        <button
          className={`toggle-button ${!isUser ? 'active' : ''}`}
          onClick={() => setIsUser(false)}
        >
          Administrator
        </button>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Enter your email" className="input-field" />
        <div className="password-field">
          <input type="password" placeholder="Enter your password" className="input-field" />
          <button type="button" className="show-password">👁️</button>
        </div>
        <button type="submit" className="login-button">
          Login as {isUser ? 'User' : 'Administrator'}
        </button>
        <div className="additional-links">
          <a href="#forgot-password">Forgot password?</a>
          <a href="#create-account">Create account</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
