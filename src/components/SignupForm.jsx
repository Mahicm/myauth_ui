import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";


const SignupForm = ({ onFlip }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [loading, setLoading] = useState(false);


    const getPasswordStrength = (password) => {
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        if (strength <= 2) return "weak";
        if (strength === 3 || strength === 4) return "medium";
        return "strong";
    };


    const handleSignup = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            const userData = {
                fullName,
                email,
                password
            };
            console.log("User Signed Up:", userData);
            localStorage.setItem("signupData", JSON.stringify(userData));

            setLoading(false);

            onFlip();
        }, 2000);
    };

    return (
        <div className="glass-card signuptab p-8 w-[350px] rounded-2xl shadow-xl">
            <h2 className="text-2xl text-white font-bold text-center mb-6 text-gray-800">
                Signup
            </h2>

            <form className="space-y-4" onSubmit={handleSignup}>

                {/* Name */}
                <div className="relative">
                    <FaUser className="input-icon" />
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input-box pl-10"
                        onChange={(e) => setFullName(e.target.value)}
                        required />
                </div>

                {/* Email */}
                <div className="relative">
                    <FaEnvelope className="input-icon" />
                    <input type="email" placeholder="Email" className="input-box pl-10"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>

                {/* Password */}
                <div className="relative">
                    <FaLock className="input-icon" />
                    <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        className="input-box pl-10"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="absolute right-3 top-3 text-xl cursor-pointer text-gray-600"
                        onClick={() => setShowPass(!showPass)}
                    >
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>


                <div className="strength-wrap">
                    <div className={`strength-bar ${getPasswordStrength(password)}`}></div>
                    <p className="strength-text">
                        {getPasswordStrength(password) === "weak" && "Weak"}
                        {getPasswordStrength(password) === "medium" && "Medium"}
                        {getPasswordStrength(password) === "strong" && "Strong"}
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
                    disabled={password !== confirmPass || loading}
                >
                    {loading ? (
                        <div className="loader border-2 border-gray-200 border-t-blue-600 rounded-full w-5 h-5 animate-spin"></div>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </form>

            <p className="text-center font-medium mt-6 text-black-700">
                Already have an account?{" "}
                <button
                    className="text-blue-600 hover:underline font-medium"
                    onClick={onFlip}
                >
                    Login
                </button>
            </p>
        </div>
    );
};

export default SignupForm;
