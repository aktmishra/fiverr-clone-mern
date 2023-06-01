import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  // const [open, setOpen] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
    setOpen(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null;
  const currentUser = {
    id: 1,
    userName: "Akt",
    isSeller: true,
  };
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>

        <div className="links">
          <span>Fiverr Bussines</span>
          <span>Explore</span>

          <span>
            {" "}
            <img src="./img/language.png" alt="languge" /> English
          </span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          <span>Sign In</span>
          <button>Join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />

          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Photography
            </Link>
            <Link className="link menuLink" to="/">
              Business AI Services
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
