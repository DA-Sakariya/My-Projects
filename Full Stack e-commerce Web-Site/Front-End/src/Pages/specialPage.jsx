import React, { useEffect, useState } from "react";
import "../App.css"; // Or use a separate SpecialPage.css

export const SpecialPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="special-page">
      <h2>🎉 Welcome to the Special Page{user?.name ? `, ${user.name}` : ""}!</h2>
      <p>This is a protected route. Only visible if you're logged in.</p>
    </div>
  );
};
