import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePlain.css";

export default function HomePlain() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setTimeout(() => {
         navigate("/");
    }, 1000);
   
  };

  return (
    <div className="hp-root">
      <div className="hp-card">
        <div className="hp-header">
          <h1>Welcome back, <span className="accent">{username}</span></h1>
          <button onClick={logout} className="hp-logout">Logout</button>
        </div>

        <div className="hp-main">
          <div className="hp-left">
            <h2>Dashboard</h2>
            <div className="hp-stats">
              <div className="stat">
                <div className="num">8</div>
                <div className="label">Projects</div>
              </div>
              <div className="stat">
                <div className="num">24</div>
                <div className="label">Tasks</div>
              </div>
              <div className="stat">
                <div className="num">5</div>
                <div className="label">Messages</div>
              </div>
            </div>
          </div>
          <aside className="hp-right">
            <div className="profile">
              <div className="avatar">{username.charAt(0).toUpperCase()}</div>
              <div className="meta">
                <div className="name">{username}</div>
                <div className="since">Member since Jan 2025</div>
              </div>
            </div>
            <div className="quick">
              <button>New Project</button>
              <button>View Reports</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
