import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useHover from "../utils/useHover";
import Button from "../components/Button";
import FramerMagnetic from "../utils/framermagnetic";
import { lightTheme } from "../theme/theme";
import "../assets/css/projectpage.css";

import HighlightCarousel from "../components/HighlightCarousel";
// import "../components/css/base.css";
import "../components/css/sandbox.css";
import "../components/css/emblaV2.css";

// import { Player } from "video-react";
import video from "../assets/videos/Proximity.mp4";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function ProjectPage() {
  const [hoverRef, isHovered] = useHover();
  return (
    <div>
      <section className="title">
        <h2 id="project-title">LOREM TITLE.</h2>
        <div id="live-site">
          <ThemeProvider theme={lightTheme}>
            {/* <Normalize /> */}
            {/* <GlobalStyles /> */}
            <Page>
              <FramerMagnetic>
                <Button ref={hoverRef} onClick={() => console.log("clicked")}>
                  Visit Website
                </Button>
              </FramerMagnetic>
            </Page>
          </ThemeProvider>
        </div>
      </section>
      <section className="video-container">
        <div id="project-video">
          {/* <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          /> */}
          <video src={video} width="800" height="400" controls />
        </div>
      </section>

      <section className="Highlight-container">
        <div id="carousel-box">
          <main className="sandbox">
            <h2 id="highlight-title">FEATURES</h2>
            <section className="sandbox__carousel">
              <HighlightCarousel slides={SLIDES} options={OPTIONS} />
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}

export default ProjectPage;