import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { lightTheme } from "../theme/theme";
import useHover from "../utils/useHover";
import GlobalStyles from "../theme/global";
import Cursor from "../components/Cursor";
import Badge from "../components/Badge";
import Button from "../components/Button";

import EmblaCarousel from "../components/EmblaCarousel";
import "../components/css/base.css";
import "../components/css/sandbox.css";
import "../components/css/embla.css";

import "../components/css/homepage.css";

import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";
import FramerMagnetic from '../utils/framermagnetic';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const SCROLL_UP = "right";
const SCROLL_DOWN = "left";

const UseScrollDirection = () => {
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

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Homepage = () => {
  const scrollDirection = UseScrollDirection();
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <section className="section1">
        <div id="home">
        

          <Marquee style={{ fontSize: "25rem", color: "white", position: "relative", top: "30vh", opacity: "50%", letterSpacing: "10px" }} direction={scrollDirection}>Recog </Marquee>
        </div>
      </section>
      <section className="About-section">
        <div className="container mx-auto px-4 flex flex-column">
          <div id="about-c-1" className="leftcontainer">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            iure. Lorem ipsum dolor sit amet.{" "}
          </div>
          <div id="about-c-2" className="rightcontainer">
            <div className="container">
              <ThemeProvider theme={lightTheme}>
                {/* <Normalize /> */}
                {/* <GlobalStyles /> */}
                <Page>

                  <FramerMagnetic>
                    <Button ref={hoverRef} onClick={() => console.log("clicked")}>
                      About us
                    </Button>
                  </FramerMagnetic>
                </Page>
              </ThemeProvider>
            </div>
            <div className="bottomrightcontainer">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              iure. Lorem ipsum dolor sit amet.{" "}
            </div>
          </div>
        </div>

      </section>
      <div>
        <main className="sandbox">
          <section className="sandbox__carousel">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </section>
        </main>
        <main className="sandbox">
          <section className="sandbox__carousel">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </section>
        </main>
      </div>
      
      {/* <section className="section2">

        <div className="About-section">
          <div className="content-container">
            <div id="about-c-1" className="sAbout-content">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              iure. Lorem ipsum dolor sit amet.{" "}
            </div>
            <div id="about-c-2" className="About-content">
              <div>
                <ThemeProvider theme={lightTheme}>
                  <Normalize />
                  <GlobalStyles />
                  <Page>
                    <Button ref={hoverRef} onClick={() => console.log("clicked")}>
                      About us
                    </Button>
                  </Page>
                </ThemeProvider>
              </div>
              <div>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
                voluptas!
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Homepage;
