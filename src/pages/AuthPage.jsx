import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import "../css/Auth.css";
import skybg from '../assests/skybg3.jpg';

const AuthPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="min-h-screen flex items-center justify-center "
            style={{
                backgroundImage: `url(${skybg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>

            {/* Login and Signup Tabs */}
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-inner">
                    <div className="flip-front">
                        <LoginForm onFlip={() => setIsFlipped(true)}
                        />
                    </div>
                    <div className="flip-back">
                        <SignupForm onFlip={() => setIsFlipped(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
