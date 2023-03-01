import React, { useState } from "react";

import "./navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>Q</span>asim
            <span>Q</span>ayyum
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/account" activeClassName="active">Account</NavLink>
            </li>
            <li>
              <NavLink to="/post" activeClassName="active">Post</NavLink>
            </li>
            <li>
              <NavLink to="/message" activeClassName="active">message</NavLink>
            </li>
            


            
            
            
          </ul>
        </div>
        


        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            {/* <li>
              <NavLink to="/login"  className="ml-5 px-4 py-2 rounded-xl text-black hover:text-white hover:bg-teal-700 bg-teal-200" activeClassName="active">Login</NavLink>
            </li>
            <li>
            <NavLink to="/signUp" className="ml-5 px-3 py-2 rounded-xl text-white hover:bg-teal-900 bg-teal-700" activeClassName="active">SignUp</NavLink>
            </li> */}
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;