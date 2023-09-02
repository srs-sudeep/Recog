import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "./css/Navbar.css";
import { logonav } from "../assets";
// import Marquee from 'react-double-marquee';
import Marquee from "react-fast-marquee";

const SCROLL_UP = "right";
const SCROLL_DOWN = "left";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(SCROLL_UP);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection(SCROLL_DOWN);
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection(SCROLL_UP);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return scrollDirection;
};

const Navbar = () => {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.5/gsap.min.js"></script>
      <nav className="navbar">
        <div className="nav_left">
          <div className="logo">
            Recog
          </div>
        </div>
        <div className="nav_right">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
      {/* <Marquee style="speed : 1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, autem?</Marquee> */}
      <Marquee style={{fontSize : "100px"}} direction={useScrollDirection}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, cumque?</Marquee>
    
    </div>
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