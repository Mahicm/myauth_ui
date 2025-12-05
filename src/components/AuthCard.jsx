import React, { useState } from "react";
import "./AuthCard.css";

const AuthCard = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div className="auth-container">
      <div className={`card ${flip ? "flip" : ""}`}>
        
        {/* LOGIN SIDE */}
        <div className="side front">
          <h2>Welcome Back</h2>
          <p>Please login to continue</p>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="btn">Login</button>

          <p className="switchText">
            Don’t have an account?{" "}
            <span onClick={() => setFlip(true)}>Sign Up</span>
          </p>
        </div>

        {/* SIGNUP SIDE */}
        <div className="side back">
          <h2>Create Account</h2>
          <p>Join us today</p>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="btn">Sign Up</button>

          <p className="switchText">
            Already have an account?{" "}
            <span onClick={() => setFlip(false)}>Login</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default AuthCard;
