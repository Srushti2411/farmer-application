// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FarmerDashboard from './pages/FarmerDashboard/FarmerDashboard'; // Import FarmerDashboard
import Productpage from './pages/Productpage/Productpage'; // Import Productpage

function App() {
    return (
        <>
            <Navbar isLoggedIn={true} userType="farmer" /> {/* Navbar visible on all pages */}
            <Routes>
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} /> {/* Add Farmer Dashboard route */}
                <Route path="/productpage" element={<Productpage />} /> {/* Product page route */}
                {/* Additional routes can be added here when ready */}
            </Routes>
        </>
    );
}

export default App;
