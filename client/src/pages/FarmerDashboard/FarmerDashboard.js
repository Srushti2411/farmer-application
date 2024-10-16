// src/pages/FarmerDashboard.js
import React from 'react';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Farmer Dashboard</h1>

            <div className="dashboard-cards">
                {/* Add Yield Section */}
                <div className="card">
                    <h2>Add Yield</h2>
                    <form className="yield-form">
                        <input type="text" placeholder="Product Name" required />
                        <input type="number" placeholder="Quantity" required />
                        <input type="number" placeholder="Price" required />
                        <select required>
                            <option value="">Select Availability</option>
                            <option value="in-stock">In Stock</option>
                            <option value="out-of-stock">Out of Stock</option>
                        </select>
                        <button type="submit">Add Product</button>
                    </form>
                </div>

                {/* Orders Overview Section */}
                <div className="card">
                    <h2>Orders Overview</h2>
                    <ul className="orders-list">
                        <li>Order #001 - Pending</li>
                        <li>Order #002 - Shipped</li>
                        <li>Order #003 - Delivered</li>
                    </ul>
                    <button>View All Orders</button>
                </div>

                {/* Sales Analytics Section */}
                <div className="card">
                    <h2>Sales Analytics</h2>
                    <p>Total Sales: $5000</p>
                    <p>Most Popular Product: Tomatoes</p>
                    <button>View Detailed Analytics</button>
                </div>

                {/* Manage Profile Section */}
                <div className="card">
                    <h2>Manage Profile</h2>
                    <form className="profile-form">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Contact No." required />
                        <textarea placeholder="Farm Details" rows="3" required></textarea>
                        <button type="submit">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FarmerDashboard;
