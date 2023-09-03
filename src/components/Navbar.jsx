import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "./css/Navbar.css";
import { logonav } from "../assets";
import FramerMagnetic from '../utils/framermagnetic';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav_left">
        <div className="logo">
          <FramerMagnetic>
          Recog
          </FramerMagnetic>
        </div>
      </div>
      <div className="nav_right">
        <ul>
          <FramerMagnetic>
            <li>Home</li>
          </FramerMagnetic>
          <FramerMagnetic>
          <li>About</li>
          </FramerMagnetic>
          <FramerMagnetic>
          <li>Contact Us</li>
          </FramerMagnetic>
        </ul>
      </div>
    </nav>



  );

};

export default Navbar;
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isCommunityMenuOpen, setIsCommunityMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const toggleCommunityMenu = () => {
  //   setIsCommunityMenuOpen(!isCommunityMenuOpen);
  // };

  // <nav className="navbar z-50 ">
  //   <div className="navbar__left">
  //     <a href="/" className="navbar__logo">
  //       <img src={logonav} alt="logonav" />
  //     </a>
  //     <a href="/error" >
  //       <span className="navbar__company-name">Open Lake</span>
  //     </a>

  //   </div>
  //   <div className="navbar__right">
  //     <div className={`navbar__menu ${isMobileMenuOpen ? "open" : ""}`}>
  //       <a href="/projects" className="navbar__link">
  //         Projects
  //       </a>
  //       <div
  //         className="navbar__link cursor-pointer"
  //         onClick={toggleCommunityMenu}
  //       >
  //         Community
  //         <div
  //           className={`navbar__submenu ${isCommunityMenuOpen ? "open" : ""}`}
  //         >
  //           <a href="/community" className="navbar__submenu-link">
  //             Present Community
  //           </a>
  //           <a href="/past-community" className="navbar__submenu-link">
  //             Past Community
  //           </a>
  //         </div>
  //       </div>
  //       <a href="/programs" className="navbar__link">
  //         Events
  //       </a>
  //       <a href="/blogs">
  //         <button className="navbar__button">BLOGS</button>
  //       </a>
  //     </div>
  //     <div className="navbar__mobile-menu" onClick={toggleMobileMenu}>
  //       <div
  //         className={`navbar__hamburger ${isMobileMenuOpen ? "open" : ""}`}
  //       />
  //       <div className={"ham_bar"}></div>
  //       <div className={"ham_bar"}></div>
  //       <div className={"ham_bar"}></div>
  //     </div>
  //   </div>
  // </nav>