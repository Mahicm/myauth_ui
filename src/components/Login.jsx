import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login successful!");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      {/* Full-page Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full"
           style={{
             background: "linear-gradient(135deg, #E0EAFF, #FDE2FF)",
             zIndex: -1
           }}
      ></div>

      {/* Optional: subtle moving blur overlay */}
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-0"></div>

      {/* Glassmorphic Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl"
           style={{
             background: "rgba(255, 255, 255, 0.7)",
             backdropFilter: "blur(15px)",
             boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
             border: "1px solid rgba(255, 255, 255, 0.4)"
           }}
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Form */}
        <form onSubmit={validateForm} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="•••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow-md transition"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-sm text-center text-gray-700 mt-3">
            Don’t have an account?{" "}
            <a href="/signup" className="text-pink-400 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
