import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";


const SignupForm = ({ onFlip }) => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
   const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const checkStrength = () => {
    if (password.length < 4) return "weak";
    if (password.length < 7) return "medium";
    return "strong";
  };

  return (
    <div className="glass-card p-8 w-[350px] rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Signup
      </h2>

      <form className="space-y-4">

        {/* Name */}
        <div className="relative">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Full Name" className="input-box pl-10" required />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Email" className="input-box pl-10" required />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="input-icon" />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="input-box pl-10"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
           <span
            className="absolute right-3 top-3 text-xl cursor-pointer text-gray-600"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Strength */}
        <div className="strength-wrap">
          <div className={`strength-bar ${checkStrength()}`}></div>
          <p className="strength-text">
            {checkStrength() === "weak" && "Weak"}
            {checkStrength() === "medium" && "Medium"}
            {checkStrength() === "strong" && "Strong"}
          </p>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <FaLock className="input-icon" />
          <input
           type={showConfirmPass ? "text" : "password"}
            placeholder="Confirm Password"
            className="input-box pl-10"
            required
            onChange={(e) => setConfirmPass(e.target.value)}
          />
           <span
            className="absolute right-3 top-3 text-xl cursor-pointer text-gray-600"
            onClick={() => setShowConfirmPass(!showConfirmPass)}
          >
            {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {confirmPass && confirmPass !== password && (
          <p className="text-red-500 text-sm">Passwords do not match ❌</p>
        )}

        <button
          className="primary-btn w-full"
          disabled={password !== confirmPass}
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-gray-700 mt-6">
        Already have an account?{" "}
        <button
          className="text-blue-600 hover:underline"
          onClick={onFlip}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
