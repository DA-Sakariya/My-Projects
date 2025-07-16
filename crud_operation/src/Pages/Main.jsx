import axios from "axios"
import { React, useEffect, useState } from "react"
import DataOut from "./DataOut"
import DataModification from "./DataModification"

const Main = () => {
    const [userData, setUserData] = useState([])
    const [editFormData, setEditFormData] = useState(null)
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        GetData()
    }, [])

    const GetData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // console.log(response.data)
            setUserData(response.data.slice(0, 10))
        } catch (error) {
            console.warn("Fatching Error")
        }
    }

    const AddUser = async (formData) => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData)
            setUserData((prevData) => [...prevData, response.data])
        } catch (error) {
            console.warn("Posting Error");
        }
    }

    const UpdateUser = (formData) => {
        const updated = [...userData]
        updated[editIndex] = {...updated[editIndex],...formData}
        setUserData(updated)
        setEditFormData(null)
        setEditIndex(null)
    }

    const handleEdit = (index)=>{
        setEditFormData(userData[index])
        setEditIndex(index)
    }

    const handleDelete = (index) => {
        const updated = userData.filter((_, i) => i !== index)
        setUserData(updated)
        if (index === editIndex) {
            setEditIndex(null)
            setEditFormData(null)
        }
    }

    return (
        <div>
            <DataModification addUser={AddUser} updateUser={UpdateUser} editData={editFormData} isEditing={editIndex !== null} />
            <DataOut userData={userData} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    )
}
export default Main