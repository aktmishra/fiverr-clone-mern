import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>

        <div className="links">
          <span>Fiverr Bussines</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a Seller</span>
          <span>Sign In</span>
          <button>Join</button>
        </div>
      </div>

      <>
        <hr />

        <div className="menu">
          <Link className="link menuLink" to="/">
            Graphics & Design
            
          </Link>
        </div>
      </>
    </div>
  );
};

export default Navbar;
