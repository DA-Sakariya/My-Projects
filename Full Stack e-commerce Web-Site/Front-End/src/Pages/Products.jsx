import { useEffect, useState } from "react";
import "../App.css"; // Make sure this includes the CSS styles
import { Link } from "react-router-dom";

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getComponent();
    }, []);

    const getComponent = async () => {
        let result = await fetch('http://localhost:5000/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))} `
            }
        });
        result = await result.json();
        setProducts(result);
    };

    const deleteP = async (id) => {
        let response = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))} `
            }
        })
        let result = await response.json();
        if (result) {
            alert("Record Deleted")
            getComponent();
        }
    }

    const handleSearch = async (event) => {
        let key = event.target.value
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))} `
                }
            })
            result = await result.json()
            if (result) {
                setProducts(result)
            }
        } else {
            getComponent();
        }
    }

    return (
        <div className="product-container">
            <h2>Product List</h2>
            <input type="text" placeholder="Search Product" onChange={handleSearch} />
            <ul className="product-header">
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? (
                    products.map((item, index) => (
                        <ul className="product-row" key={item._id || index}>
                            <li>{index + 1}</li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.category}</li>
                            <li>{item.company}</li>
                            <li>
                                <div className="action-buttons">
                                    <button className="delete-button" onClick={() => deleteP(item._id)}>
                                        Delete
                                    </button>
                                    <Link to={`/update/${item._id}`} className="update-button">
                                        Update
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    ))
                ) : (
                    <p className="no-products">No products found.</p>
                )
            }
        </div>
    );
};
