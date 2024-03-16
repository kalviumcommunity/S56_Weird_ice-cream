import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleLogout = () => {
    document.cookie = `username=;expires= + new Date(2000, 0, 1).toUTCString()`;
    document.cookie = `accessToken=;expires= + new Date(2000, 0, 1).toUTCString()`;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username.trim() === '' && formData.password.trim() === '') {
      alert('Username and password are required');
    } else if (formData.username.trim() === '') {
      alert('Username is required');
    } else if (formData.password.trim() === '') {
      alert('Password is required');
    } else {
      console.log('Login submitted:', formData);
      document.cookie = `username=${formData.username};expires= + new Date(2030, 0, 1).toUTCString()`;

      axios.post("http://localhost:3000/auth", formData)
        .then((response) => {
          console.log(response.data.accessToken);
          document.cookie = `accessToken=${response.data.accessToken};expires= + new Date(2030, 0, 1).toUTCString()`;
        })
        .catch((err) => {
          console.log(err);
          alert('Error occurred while logging in');
        });
    }
  };

  return (
    <div className="login-container">
      <div className="logout-container">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2 className="login-heading">Login Page</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="input-username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="input-password"
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
