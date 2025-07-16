import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic validations
        if (!formData.email || !formData.password) {
            setError("Please enter both email and password.");
            return;
        }

        // Clear error if inputs are fine
        setError("");


        let response = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));

            alert("Login successful!");

            // Decode token and set Log-Out
            const tokenPayload = JSON.parse(atob(result.auth.split('.')[1]));
            // console.log(tokenPayload)
            const expiryTime = tokenPayload.exp * 1000; // convert to ms
            const currentTime = Date.now();
            const timeUntilExpiry = expiryTime - currentTime;

            if (timeUntilExpiry > 0) {
                setTimeout(() => {
                    alert("Session expired. Logging out...");
                    localStorage.clear();
                    navigate("/login");
                }, timeUntilExpiry);
            }

            // Navigate with a small delay
            setTimeout(() => {
                navigate("/special");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }, 2000);
        } else {
            setError("Invalid email or password.");
        }
    }
    return (
        <div className="login-container">
            <h2>Log In</h2>
            {error && <p className="error">{error}</p>}

            <form className="login-form" onSubmit={handleSubmit}>
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
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LogIn;