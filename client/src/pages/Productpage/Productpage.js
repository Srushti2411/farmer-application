// AddProduct.js
import React, { useState } from 'react';
import './Productpage.css'; // Import CSS for styling

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle product addition logic here
        console.log({ productName, quantity, price, availability });
        // Reset the form
        setProductName('');
        setQuantity('');
        setPrice('');
        setAvailability('');
    };

    return (
        <div className="add-product-container">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit} className="add-product-form">
                <div className="form-group">
                    <label>Product Name:</label>
                    <input 
                        type="text" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Quantity:</label>
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Availability:</label>
                    <input 
                        type="text" 
                        value={availability} 
                        onChange={(e) => setAvailability(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="submit-button">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
