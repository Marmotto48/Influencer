import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginDialog from "../MUI/Dialog";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  //
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className={colorChange ? " colorChange nav-header" : "navbar nav-header"}>
        <div className="logo-nav">
          <div className="logo-container">
            <Link to="/">
              <h1 className={colorChange ? "heading-2 " : "heading heading-1"}>
                INFLUENCERS
              </h1>
            </Link>
          </div>
          <ul
            className={
              click ? "nav-options active colorChange" : "nav-options "
            }
          >
            <li className="link link-a" onClick={closeMobileMenu}>
              <a href="#a">ABOUT</a>
            </li>
            <li className="link link-a" onClick={closeMobileMenu}>
              <a href="#a">CONTACT</a>
            </li>
            <li className="link link-a" onClick={closeMobileMenu}>
              <a href="#a">BLOG</a>
            </li>
            <button
              className="link link-b"
              to="/login"
              onClick={handleClickOpen}
            >
              SIGNIN / SINGUP
            </button>
            <Link className="link link-b" to="/">
              DEMO
            </Link>
          </ul>
        </div>
        <FaBars className="menu-icon" onClick={handleClick} />
        <LoginDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
