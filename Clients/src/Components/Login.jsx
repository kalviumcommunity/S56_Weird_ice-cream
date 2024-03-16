import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    document.cookie = `username=;expires= + new Date(2000, 0, 1).toUTCString()`;
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' && password.trim() === '') {
      alert('Username and password are required');
    } else if (username.trim() === '') {
      alert('Username is required');
    } else if (password.trim() === '') {
      alert('Password is required');
    } else {
      console.log('Login submitted:', { username, password });
      document.cookie = `username=${username};expires= + new Date(2030, 0, 1).toUTCString()`;
    }
  };

  return (
    <div className="login-container">
      <div className="logout-container" id="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2 className="login-heading" id="logintext">
        Login Page
      </h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="label-username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            className="input-username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label-password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="input-password"
          />
        </div>
        <button type="submit" id="enter" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
