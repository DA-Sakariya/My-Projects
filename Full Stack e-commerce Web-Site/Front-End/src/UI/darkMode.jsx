// components/DarkModeToggle.jsx
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (isDark) {
      bodyClass.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      bodyClass.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      className="logout-button"
      onClick={() => setIsDark(!isDark)}
      title="Toggle Dark Mode"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;
