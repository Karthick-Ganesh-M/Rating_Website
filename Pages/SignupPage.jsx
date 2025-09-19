import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (fullName.length < 2 || fullName.length > 60) {
      alert("Full name must be between 2 and 60 characters.");
      return;
    }

    if (address.length > 400) {
      alert("Address cannot exceed 400 characters.");
      return;
    }

    if (!role) {
      alert("Please select a role.");
      return;
    }

    // ✅ Simulate account creation success
    alert("Account created successfully!");
    navigate("/stores");
  };

  return (
    <div className="signuppage-container">
      <div className="signuppage-wrapper">
        {/* Header */}
        <div className="signuppage-header">
          <div className="signuppage-icon">🏬</div>
          <h2 className="signuppage-title">Store Rating Platform</h2>
          <p className="signuppage-subtitle">Create your account</p>
        </div>

        {/* Sign Up Form */}
        <div className="signuppage-form">
          <h4>Sign Up</h4>
          <p>Fill in the information below to create your account</p>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label>
              Full Name <span className="signuppage-required">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name (2-60 characters)"
              minLength="2"
              maxLength="60"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            {/* Email */}
            <label>
              Email <span className="signuppage-required">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Address */}
            <label>
              Address <span className="signuppage-required">*</span>
            </label>
            <textarea
              placeholder="Enter your complete address (max 400 characters)"
              maxLength="400"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <div className="signuppage-charcount">{address.length}/400</div>

            {/* Dropdown */}
            <label>
              Login As <span className="signuppage-required">*</span>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Select role</option>
              <option value="user">Normal User</option>
              <option value="admin">System Administrator</option>
              <option value="owner">Store Owner</option>
            </select>

            {/* Password */}
            <label>
              Password <span className="signuppage-required">*</span>
            </label>
            <input
              type="password"
              placeholder="8-16 chars with uppercase & special character"
              minLength="8"
              maxLength="16"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Confirm Password */}
            <label>
              Confirm Password <span className="signuppage-required">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* Submit Button */}
            <button type="submit" className="signuppage-button">
              Create Account
            </button>
          </form>

          {/* ✅ Back to login using React Router Link */}
          <p className="signuppage-footer">
            Already have an account?{" "}
            <Link to="/">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
