import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import github from "../assests/github.png";
import google from "../assests/google.png";
import { MdEmail } from "react-icons/md";

const LoginForm = ({ onFlip }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    //  onSuccess();
     
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "/home";
  };

  return (
    <div className="glass-card p-8 w-[350px] rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">

        {/* Email with Icon */}
        <div className="relative">
          <MdEmail className="input-icon" />
          <input
            type="email"
            className="input-box pl-10"
            placeholder="Email"
            required
          />
        </div>

        {/* Password with Icon */}
        <div className="relative">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-box pl-10 pr-12"
            required
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>
          <button type="button" className="text-blue-600 hover:underline">
            Forgot Password?
          </button>
        </div>

        <button className="primary-btn w-full">Login</button>
      </form>

      <div className="divider">OR</div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-3">
        <button className="icon-btn">
          <img src={github} className="w-8" />
        </button>

        <button className="icon-btn">
          <img src={google} className="w-8" />
        </button>
      </div>

      <p className="text-center text-gray-700 mt-6">
        Don't have an account?{" "}
        <button
          className="text-blue-600 hover:underline"
          onClick={onFlip}
        >
          Signup
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
