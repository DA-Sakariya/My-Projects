import React, { useEffect, useState } from 'react'

export default function DataModification({ addUser,isEditing, editData, updateUser  }) {
    const [formData, setFormData] = (useState({
        title: "",
        body: ""
    }))

    useEffect(()=>{
        if(isEditing && editData){
            setFormData(editData)
        }
    },[isEditing,editData])

    

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        if(isEditing){
            updateUser(formData)
        }else{
            addUser(formData)
        }

        setFormData({
            title: "",
            body: ""
        })
    }

    return (
        <div className="form-container">
            <form className="mini-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.title}
                    name="title"
                    onChange={handleChange}
                    placeholder="Enter Title"
                />
                <input
                    type="text"
                    value={formData.body}
                    name="body"
                    onChange={handleChange}
                    placeholder="Enter Data"
                />
                <button type="submit">{isEditing ? "Edit User" : "Add"}</button>
            </form>

        </div>

    )
}
