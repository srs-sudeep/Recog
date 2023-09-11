import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "./css/Navbar.css";
import { logonav } from "../assets";
import FramerMagnetic from '../utils/framermagnetic';
import "react-hamburger-menus/dist/style.css";
import { GhostNavbar } from "react-hamburger-menus";
// import "react-hamburger-menus/dist/style.css";
import { Zoom } from "react-awesome-reveal";
import { isVisible } from "@testing-library/user-event/dist/utils";
import FadeInOut from "../utils/FadeInOut";
import { faBlackboard } from "@fortawesome/free-solid-svg-icons";
// import { motion } from "framer-motion"

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth', // Smooth scrolling animation
      });
    }
  };


  const UseScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 150) {
          setScrollDirection(true);
        } else if (currentScrollY < 150) {
          setScrollDirection(false);
        }

        // setPrevScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollY]);

    return scrollDirection;
  };
  // const toggleShow = () => setShow(!show);



  const visi = UseScrollDirection();
  // console.log(visi);
  return (
    // const visi = UseScrollDirection();
    <div>
      <div className="mobile">
        <FadeInOut show={true} duration={500} >
          <GhostNavbar />
        </FadeInOut>
      </div>
      <div className="non-mobile">
        {/* <FramerMagnetic styles={{zIndex : "99999998"}}> */}
        <div id="ghostbar">
          <FadeInOut show={visi} duration={500}>
            <GhostNavbar
              styles={{
                fontColor: "#fff",
                fontHoverColor: "black",
                floatButtonSize: 0.9,
                floatButtonX: 6,
                floatButtonY: 15,
                fontHoverColor : "black",
                navigationBackground: {backgroundColor: "black"}
                // fontColor : {"black"}
              }}
            >
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
                {/* <li>CONTACT</li> */}
              </ul>
            </GhostNavbar>
          </FadeInOut>
        </div>
        {/* </FramerMagnetic > */}
        {visi}
        <nav className="navbar" >
          <div className="nav_left">
            <div className="logo">
              <FramerMagnetic>
                Recog<span>X</span>
              </FramerMagnetic>
            </div>
          </div>
          <div className="nav_right">
            <ul>
              <FramerMagnetic>
                <li><a href="./" onClick={() => scrollToSection('section1')}>Home</a>
                  <div class="underline"></div>
                </li>
              </FramerMagnetic>
              <FramerMagnetic>
                <li><a href="./#about" onClick={() => scrollToSection('about')}>About</a>
                  <div class="underline"></div>
                </li>
              </FramerMagnetic>
              <FramerMagnetic>
                <li><a href="./projects">Work</a>
                  <div class="underline"></div>
                </li>
              </FramerMagnetic>
              <FramerMagnetic>
                <li><a onClick={() => scrollToSection('footer')}>ContactUs</a>
                  <div class="underline"></div>
                </li>
              </FramerMagnetic>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
