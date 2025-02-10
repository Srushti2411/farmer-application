import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar'; // Import the Navbar component
import Home from './pages/Home/Home'; // Import Home
import FarmerDashboard from './pages/FarmerDashboard/FarmerDashboard'; // Import FarmerDashboard
import ProductPage from './pages/Productpage/Productpage'; // Import ProductPage

function App() {
    return (
        <>
            <Navbar isLoggedIn={true} userType="farmer" /> {/* Navbar visible on all pages */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home page route */}
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} /> {/* Farmer Dashboard route */}
                <Route path="/productpage" element={<ProductPage />} /> {/* Product page route */}
                {/* Additional routes can be added here when ready */}
            </Routes>
        </>
    );
}

export default App;
