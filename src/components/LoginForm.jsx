import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import github from "../assests/github.png";
import google from "../assests/google.png";
import { MdEmail } from "react-icons/md";

const LoginForm = ({ onFlip }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loginEmail", email);
        localStorage.setItem("loginPassword", password);
        setTimeout(() => {
            setLoading(false);
            window.location.href = "/home";
        }, 2000);

    };

    return (
        <div className="glass-card p-8 w-[350px] rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
                Welcome Back!
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">

                {/* Email with Icon */}
                <div className="relative">
                    <MdEmail className="input-icon" />
                    <input
                        type="email"
                        className="input-box pl-10"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                    <label className="flex items-center gap-2 font-medium">
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <button type="button" className="text-blue-600 hover:underline font-medium">
                        Forgot Password?
                    </button>
                </div>

                <button className="primary-btn w-full">
                    {loading ? (
                        <div className="loader border-2 border-gray-200 border-t-blue-600 rounded-full w-5 h-5 animate-spin"></div>
                    ) : (
                        "Login"
                    )}
                </button>
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

            <p className="text-center text-black-700 mt-6 font-medium">
                Don't have an account?{" "}
                <button
                    className="text-blue-600 hover:underline font-medium"
                    onClick={onFlip}
                >
                    Signup
                </button>
            </p>
        </div>
    );
};

export default LoginForm;
