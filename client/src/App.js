// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FarmerDashboard from './pages/FarmerDashboard/FarmerDashboard'; // Import FarmerDashboard

function App() {
    return (
        <>
            <Navbar isLoggedIn={true} userType="farmer" /> {/* Navbar visible on all pages */}
            <Routes>
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} /> {/* Add Farmer Dashboard route */}
                {/* Additional routes can be added here when ready */}
            </Routes>
        </>
    );
}

export default App;
