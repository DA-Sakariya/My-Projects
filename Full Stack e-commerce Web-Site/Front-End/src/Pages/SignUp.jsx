import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate("/")
    }
  }, [navigate])

  const handleChange = (event) => {
    setFormData({
      ...formData, [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validations
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.name.length < 3) {
      setError("Name must be at least 3 characters.");
      return;
    }

    // All good
    setError("");
    console.log("User Signed Up:", formData);
    // alert("Sign Up Successful!");

    let response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    console.log(response);

    if (response) {
      localStorage.setItem("user", JSON.stringify(response.result));
      localStorage.setItem("token", JSON.stringify(response.auth));
      alert("Signup successful!");

      const tokenPayload = JSON.parse(atob(response.auth.split('.')[1]));
      // console.log(tokenPayload)
      const expiryTime = tokenPayload.exp * 1000; // convert to ms
      const currentTime = Date.now();
      const timeUntilExpiry = expiryTime - currentTime;

      if (timeUntilExpiry > 0) {
        setTimeout(() => {
          alert("Session expired. Logging out...");
          localStorage.clear();
          navigate("/signup");
        }, timeUntilExpiry);
      }

      // Redirect logic
      setTimeout(() => {
        navigate("/special");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }, 2000);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
