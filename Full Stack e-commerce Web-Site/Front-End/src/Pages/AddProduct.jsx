import React, { useState } from "react";
import "../App.css";

export const AddProducts = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        company: ""
    })

    const [error, setError] = useState("")

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value, });
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        //Validation
        if (!formData.name || !formData.price || !formData.category || !formData.company) {
            setError("Please fill in all fields")
            return;
        }

        if (isNaN(formData.price)) {
            setError("Category and Company must be at least 3 characters long.");
            return;
        }

        if (formData.category.length < 3 || formData.company.length < 3) {
            setError("Category and Company must be at least 3 characters long.");
            return;
        }

        setError("");

        const storedUser = localStorage.getItem("user");
        const user = storedUser ? JSON.parse(storedUser) : null;
        const userId = user?._id;

        const result = await fetch("http://localhost:5000/add-product", {
            method: "POST",
            body: JSON.stringify({
                name: formData.name,
                price: formData.price,
                category: formData.category,
                company: formData.company,
                userId: userId
            }),
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))} `
            }
        });

        const response = await result.json();
        console.log("Server response:", response);

        //Reset form
        setFormData({ name: "", price: "", category: "", company: "" });
        alert("Product added successfully!");

    }
    return (
        <div className="add-product-container">
            <h2>Add New Product</h2>
            {error && <p className="error">{error}</p>}

            <form className="add-product-form" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} placeholder="Enter Product Name" onChange={handleChange} />
                <input type="text" name="price" value={formData.price} placeholder="Enter Product Price" onChange={handleChange} />
                <input type="text" name="category" value={formData.category} placeholder="Enter Product Category" onChange={handleChange} />
                <input type="text" name="company" value={formData.company} placeholder="Enter Company Name" onChange={handleChange} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};
