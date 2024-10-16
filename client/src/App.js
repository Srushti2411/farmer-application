import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FarmerDashboard from './pages/FarmerDashboard';
import AddProduct from './pages/AddProduct';
import OrderManagement from './pages/OrderManagement';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/orders" element={<OrderManagement />} />
        </Routes>
    );
}

export default App;
