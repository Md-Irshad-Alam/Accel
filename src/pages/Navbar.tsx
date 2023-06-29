import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
      <div className="Navbar">
        <div className="logo">
            <Link to="/logo">Logo</Link>
        </div>
        <div className="left-nav">
            <Link to="/about">About</Link>
            <Link to="/price">Pricing</Link>
            <Link to="/review">Review</Link>
        </div>
      </div>
  )
}

export default Navbar
