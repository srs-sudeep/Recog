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
import projectItems from "./projectItems";
import EmblaCarousel from "../components/EmblaCarousel";
import EmblaCarousel2 from "../components/EmblaCarousel2";
// import "../components/css/base.css";
import "../components/css/sandbox.css";
import "../components/css/embla.css";

import "../assets/css/homepage.css";

import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";
import FramerMagnetic from "../utils/framermagnetic";
import Lottie from "lottie-react";
import globe from "../assets/lottie/globe.json";
import { Height } from "@mui/icons-material";
import { background } from "@chakra-ui/react";
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          {/* container w-screen h-2 */}

          <div className="hero-mid ">
            <div id="left-mid">
              <h1>Located In Bhilai</h1>
              <div id="circle">
                <Lottie
                  animationData={globe}
                  loop={true}
                  style={{ height: 100, width: "fit-content" }}
                />
              </div>
            </div>
            <div id="right-mid">
              <p>Freelance</p>
              <p>Designer & Developer</p>
            </div>
          </div>
          <div id="marquee-fsize">
            <Marquee direction={scrollDirection}>RecogX </Marquee>
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: "white" }}>
        <section className="about-section" id="about">
          <div className="about-container mx-auto px-4 flex flex-column">
            <div id="about-c-1" className="leftcontainer">
              {" "}
              <strong>RecogX</strong> is an agile development startup committed to bringing your digital dreams to life. With a team of talented developers and a passion for innovation, we specialize in creating custom web and mobile applications that solve your unique challenges. We pride ourselves on efficiency, transparency, and delivering top-notch results within budget and on schedule.{" "}
            </div>
            <div id="about-c-2" className="rightcontainer">
              <div className="bottomrightcontainer">
                {" "}
                Let us be your trusted partner in turning your ideas into reality. Contact us today to embark on a development journey that drives your business forward.{" "}
              </div>
              <div className="btn-container">
                <ThemeProvider theme={lightTheme}>
                  <Page>
                    <FramerMagnetic>
                      <Button
                        ref={hoverRef}
                        onClick={() => console.log("clicked")}
                      >
                        About us
                      </Button>
                    </FramerMagnetic>
                  </Page>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </section>
        <section className="section-carousel">
          <div>
            <main className="sandbox">
              <section className="sandbox__carousel">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              </section>
            </main>
          </div>
          <div>
            <main className="sandbox">
              <section className="sandbox__carousel">
                <EmblaCarousel2 slides={SLIDES} options={OPTIONS} />
              </section>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
