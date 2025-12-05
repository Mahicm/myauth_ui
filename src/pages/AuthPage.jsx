import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import "../css/Auth.css";
import Snackbar from "../components/Snackbar";

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
   const [snackbar, setSnackbar] = useState({ show: false, message: "", type: "" });

    const showSnackbar = (msg, type = "success") => {
    setSnackbar({ show: true, message: msg, type });

    setTimeout(() => {
      setSnackbar({ show: false, message: "", type: "" });
    }, 3200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-200 p-4">
       {/* SnackBar */}
      {snackbar.show && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar({ show: false })}
        />
      )}

      {/* Login and Signup Tabs */}
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-inner">
          <div className="flip-front">
            <LoginForm onFlip={() => setIsFlipped(true)} 
                onSuccess={() => showSnackbar("Login Successful!")}
                />
          </div>

          <div className="flip-back">
            <SignupForm onFlip={() => setIsFlipped(false)} 
                onSuccess={() => showSnackbar("Account Created Successfully!")}
                />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
