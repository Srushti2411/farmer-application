// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router for navigation
import './Navbar.css'; // Import CSS for styling or use Bootstrap

const Navbar = ({ isLoggedIn, userType }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AgroConnect</Link> {/* Your platform name */}
      </div>
      <ul className="navbar-links">
        {/* Link to Farmer Dashboard */}
        <li>
          <Link to="/farmer-dashboard">Farmer Dashboard</Link> {/* Corrected link */}
        </li>
        <li>
          <Link to="/productpage">Products</Link> {/* Corrected to match Product Page route */}
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>

        {/* Conditional rendering based on isLoggedIn */}
        {isLoggedIn ? (
          <>
            {/* Links for logged-in users */}
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Select language :</Link>
                      <select 
              defaultValue={localStorage.getItem("lang")}
              onChange={(e)=>{
                localStorage.setItem("lang",e.target.value);
                window.location.reload();
              }}>
                <option value="mr">Marathi</option>
                <option value="hi">Hindi</option>
                <option value="en">English</option>
              </select>
            </li>
          </>
        ) : (
          <>
            {/* Links for non-logged-in users */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </>
        )}

        {/* Conditional links based on userType */}
        {userType === 'farmer' && isLoggedIn && (
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
        )}
        {userType === 'vendor' && isLoggedIn && (
          <li>
            <Link to="/bulk-orders">Bulk Orders</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
