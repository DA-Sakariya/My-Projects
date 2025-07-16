// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // or Profile.css if separate

export const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
          alt="avatar"
          className="profile-avatar"
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div className="profile-actions">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};
