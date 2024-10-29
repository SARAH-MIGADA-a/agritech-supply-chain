import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import './LoginSignupScreen.css';

function LoginSignupScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Add your authentication logic here if needed

    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="login-signup-container">
      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button
          onClick={() => setIsLogin(true)}
          className={isLogin ? "active" : ""}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={!isLogin ? "active" : ""}
        >
          Signup
        </button>
      </div>

      {/* Login/Signup Form */}
      {isLogin ? (
        <div className="form-content">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}> {/* Add onSubmit to form */}
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="form-content">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}> {/* Add onSubmit to form */}
            <label>Username</label>
            <input type="text" placeholder="Choose a username" required />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
            <button type="submit">Signup</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginSignupScreen;
