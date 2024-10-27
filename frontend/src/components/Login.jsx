// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:5000/api/admin/login', { username, password })
      .then((response) => {
        alert('Login successful');
        navigate('/admin'); // Redirect to AdminPanel
      })
      .catch((error) => {
        setMessage('Login failed');
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="login-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">Login</button>
      {message && <p className="login-message">{message}</p>}
    </div>
  );
};

export default Login;
