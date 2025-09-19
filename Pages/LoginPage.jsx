// LoginPage.js
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Dummy login success (you can add validation later)
    navigate("/stores"); // Redirect to StoresPage
  };

  return (
    <div className="loginpage-container">
      <div className="loginpage-wrapper">
        {/* Header */}
        <div className="loginpage-header">
          <div className="loginpage-icon">🏬</div>
          <h2 className="loginpage-title">Store Rating Platform</h2>
          <p className="loginpage-subtitle">Sign in to your account</p>
        </div>

        {/* Demo Accounts Section */}
        <div className="loginpage-demo">
          <h4>Demo Accounts</h4>
          <p>
            <strong>Admin:</strong> admin@storerating.com
            <br />
            <strong>User:</strong> jane@example.com
            <br />
            <strong>Store Owner:</strong> mike@beststore.com
            <br />
            <em>Password: any 8+ characters</em>
          </p>
        </div>

        {/* Login Form */}
        <div className="loginpage-form">
          <h4>Login</h4>
          <p>Enter your email and password to access your account</p>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit" className="loginpage-button">
              Sign in
            </button>
          </form>

          {/* ✅ Use Link to go to signup page */}
          <p className="loginpage-footer">
            Don’t have an account?{" "}
            <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
