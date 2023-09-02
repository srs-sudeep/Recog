import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { lightTheme } from "../theme/theme";
import useHover from "../utils/useHover";
import GlobalStyles from "../theme/global";
import Cursor from "../components/Cursor";
import Badge from "../components/Button";
import Button from "../components/Button";
import "../assets/css/homepage.css";
// import { Card, Testimonial } from "../components";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
// import {
//   image,
//   secimage,
//   prmerged,
//   linesadded,
//   closed,
//   potential,
//   propened,
//   logosvg,
//   carimage,
//   toparrow,
//   downarrow,
// } from "../assets";

// import Xarrow from "react-xarrows";
// import { useSnapCarousel } from "react-snap-carousel";
// import { slideIn } from "../utils/motion";

// const programs = [
//   {
//     date: "Apr 14",
//     image: carimage,
//     title: "Lorem ipsum dolor sit amet consectetur.",
//     content:
//       "Well get you directly seated and inside for you to enjoy the show.",
//   },
//   {
//     date: "Apr 14",
//     image: carimage,
//     title: "Lorem ipsum dolor sit amet consectetur.",
//     content:
//       "Well get you directly seated and inside for you to enjoy the show.",
//   },
//   {
//     date: "Apr 14",
//     image: carimage,
//     title: "Lorem ipsum dolor sit amet consectetur.",
//     content:
//       "Well get you directly seated and inside for you to enjoy the show.",
//   },
//   {
//     date: "Apr 14",
//     image: carimage,
//     title: "Lorem ipsum dolor sit amet consectetur.",
//     content:
//       "Well get you directly seated and inside for you to enjoy the show.",
//   },
//   {
//     date: "Apr 14",
//     image: carimage,
//     title: "Lorem ipsum dolor sit amet consectetur.",
//     content:
//       "Well get you directly seated and inside for you to enjoy the show.",
//   },
//   {
//     date: "Apr 14",
//     image: carimage,
//     title: "Lorem ipsum dolor sit amet consectetur.",
//     content:
//       "We will get you directly seated and inside for you to enjoy the show.",
//   },
// ];
// const stats = [
//   {
//     image: propened,
//     num: 112,
//     title: "PRs open",
//   },
//   {
//     image: prmerged,
//     num: 1053,
//     title: "PRs merged",
//   },
//   {
//     image: secimage,
//     num: 421,
//     title: "Isseues opened",
//   },
//   {
//     image: closed,
//     num: 421,
//     title: "Isseues closed",
//   },
//   {
//     image: linesadded,
//     num: 705000,
//     title: "Lines Added",
//   },
//   {
//     image: potential,
//     num: 999999,
//     title: "Potential",
//   },
// ];
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Header = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1em;

  @media (min-width: 480px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Homepage = () => {
  // const box1Ref = useRef(null);
  // const { scrollRef, next, prev } = useSnapCarousel();

  // const [repos, setRepos] = useState([]);
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth - 40);
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.github.com/users/openlake/repos"
  //       );
  //       const data = await response.json();
  //       setRepos(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const [hoverRef, isHovered] = useHover();
  return (
    <div>
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
    </div>
  );
};

export default Homepage;
