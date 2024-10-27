// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-body">
      <h2 className="welcome-message">Manage and view student results seamlessly with our dedicated portal.
      </h2>
      <div className="button-container">
        <button className="home-button" onClick={() => navigate('/login')}>
          <FontAwesomeIcon icon={faUserShield} className="icon" /> Admin Login
        </button>
        <button className="home-button" onClick={() => navigate('/student')}>
          <FontAwesomeIcon icon={faUserGraduate} className="icon" /> Student Portal
        </button>
      </div>
    </div>
  );
};

export default Home;
