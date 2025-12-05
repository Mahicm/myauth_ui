// import React, { useState } from "react";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateForm = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!name.trim()) newErrors.name = "Name is required";

//     if (!email.trim()) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email))
//       newErrors.email = "Enter a valid email";

//     if (!password.trim()) newErrors.password = "Password is required";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       alert("Signup successful!");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center relative">
//       {/* Full-page Gradient Background */}
//       <div className="absolute top-0 left-0 w-full h-full"
//            style={{
//              background: "linear-gradient(135deg, #E0EAFF, #FDE2FF)",
//              zIndex: -1,
//            }}
//       ></div>

//       {/* Optional: subtle blurred overlay */}
//       <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-0"></div>

//       {/* Glassmorphic Card */}
//       <div className="relative z-10 w-full max-w-md p-8 rounded-2xl"
//            style={{
//              background: "rgba(255, 255, 255, 0.7)",
//              backdropFilter: "blur(15px)",
//              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//              border: "1px solid rgba(255, 255, 255, 0.4)"
//            }}
//       >
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
//           Create Account ✨
//         </h2>

//         {/* Form */}
//         <form onSubmit={validateForm} className="space-y-5">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
//               placeholder="•••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && (
//               <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow-md transition"
//           >
//             Sign Up
//           </button>

//           {/* Login Link */}
//           <p className="text-sm text-center text-gray-700 mt-3">
//             Already have an account?{" "}
//             <a href="/" className="text-pink-400 font-medium hover:underline">
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.password.trim())
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signup successful!");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      {/* Card Container */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-300">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={validateForm} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-sm text-center text-slate-500 mt-3">
            Already have an account?{" "}
            <a href="/" className="text-teal-500 font-medium hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
