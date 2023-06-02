import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [userOption, setUserOption] = useState(false);
  const [open, setOpen] = useState(false);
  
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
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
    isSeller: false,
  };
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
        <Link className="link" to='./'><span className="text">fiverr</span></Link>  
          <span className="dot">.</span>
        </div>

        <div className="navLinks">
          <Link className="link navLink">
            <span> Fiverr Bussines</span>
          </Link>
          <Link className="link navLink">
            <span>Explore</span>
          </Link>
          <Link className="link navLink">
            <span>
              <img src="./img/language.png" alt="languge" /> English
            </span>
          </Link>
          {!currentUser?.isSeller && (
            <Link className="link">
              <span>Become a Seller</span>
            </Link>
          )}
          {currentUser ? (
            <div className="user" onClick={() => setUserOption(!userOption)}>
              <img src="./img/user.jpg" alt="" className="userImage" />
              <span>{currentUser?.userName}</span>
              {userOption && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link option" to="/myGigs">
                        <span>Gigs</span>
                      </Link>
                      <Link className="link option" to="/add">
                        <span>Add New Gigs</span>
                      </Link>
                    </>
                  )}
                  <Link className="link option" to="/orders">
                    <span>Orders</span>
                  </Link>
                  <Link className="link option" to="/massages">
                    <span>Massages</span>
                  </Link>
                  <Link className="link option" to="/">
                    <span>Logout</span>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link className="link navLink" to="/">
                <span>Logout</span>
              </Link>
              <button>Join</button>
            </>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />

          <div className="menues">
             
              <Link className="link menuLink" to="/" on={()=>setOpen(!open)}>
                 Graphics & Design  
                {open&&(
                  <div className="menuOption">
                    <span>hdhh</span>
                    <span>hdhh</span>
                    <span>hdhh</span>
                    <span>hdhh</span>
                  </div>
                )}
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
