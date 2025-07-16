import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateProducts = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        company: ""
    })
    const params = useParams()
    const navigate = useNavigate()

    // const { name, price, category, company } = formData

    useEffect(()=>{
        getComponentDetails();
    },[])

    const getComponentDetails = async()=>{
        // console.log(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))} `
            }
        })
        result = await result.json()
        setFormData({
            name: result.name,
            price: result.price,
            category: result.category,
            company: result.company
        })
    }


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value, });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //Reset form
        // console.log(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"PUT",
            body: JSON.stringify({
                name : formData.name,
                price : formData.price,
                category : formData.category,
                company : formData.company 
            }),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))} `
            }
        })
        result = await result.json()
        // console.log(result)
        if(result.modifiedCount > 0){
            alert("Product Updated successfully!");
            setFormData({ name: "", price: "", category: "", company: "" });
            navigate("/")
        }
        
    }
    return (
        <div className="update-product-container">
            <h2>Update Product</h2>
            <form className="update-product-form" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} placeholder="Enter Product Name" onChange={handleChange} />
                <input type="text" name="price" value={formData.price} placeholder="Enter Product Price" onChange={handleChange} />
                <input type="text" name="category" value={formData.category} placeholder="Enter Product Category" onChange={handleChange} />
                <input type="text" name="company" value={formData.company} placeholder="Enter Company Name" onChange={handleChange} />
                <button type="submit">Update Product</button>
            </form>
        </div>

    );
};
