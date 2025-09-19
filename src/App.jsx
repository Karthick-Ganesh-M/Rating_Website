// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import StoresPage from "../Pages/StoresPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/normaluser" element={<NormalUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
