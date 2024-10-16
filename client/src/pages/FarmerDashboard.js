// src/pages/FarmerDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FarmerDashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Your Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default FarmerDashboard;
