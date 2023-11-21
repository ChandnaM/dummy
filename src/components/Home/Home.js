import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="background">
      <img
        src="/image/backgroundimg.jpg"
        alt="background"
        className="background-image"
      />
      <div className="button-container">
        <Link to="/editor" className="button link-button">
          Go to SQL Editor
        </Link>
        <button className="button login-button">Login</button>
        <button className="button register-button">Register</button>
      </div>
    </div>
  );
};

export default Home;
