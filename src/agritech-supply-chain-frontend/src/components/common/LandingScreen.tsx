import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingScreen.css';

const LandingScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="landing-screen">
      <img src="/assets/images/agritech-logo.png" alt="Agritech Logo" className="logo" />
      <h1 className="headline">Pure Agricultural Products</h1>
      <p className="subheadline">Welcome to Agritech. We believe in better agriculture for a better future.</p>
      <div className="navigation">
        {/* Removed Learn More button */}
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingScreen;
