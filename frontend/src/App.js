// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import StudentPortal from './components/StudentPortal';
import Login from './components/Login';
import Home from './components/Home';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Result Management System</h1>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/student" element={<StudentPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<StudentPortal />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
