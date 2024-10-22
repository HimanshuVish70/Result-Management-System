import React, { useState } from 'react';
import axios from 'axios';
// import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/admin/login', { email, password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/admin'; // Redirect to Admin Dashboard
      })
      .catch((error) => {
        alert('Login failed: ' + error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
