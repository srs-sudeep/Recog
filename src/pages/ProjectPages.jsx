import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import useHover from "../utils/useHover";
import Button from "../components/Button";
import FramerMagnetic from "../utils/framermagnetic";
import { lightTheme } from "../theme/theme";
import projectItems from "./projectItems";
import FeaturesCarousel from "../components/FeaturesCarousel";
import "../assets/css/projectpage.css";
import "../components/css/sandbox.css";
import "../components/css/emblaV2.css";

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
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  const { id } = useParams();
  const [projectsPage, setProjectsPage] = useState(null);
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    // Find the article with the matching id
    const foundProjectsPage = projectItems.find(
      (projectsPage) => projectsPage.id === parseInt(id)
    );
    setProjectsPage(foundProjectsPage);
  }, [id]);

  if (!projectsPage) {
    return <div>Loading...</div>;
  }

  const slide_pages = [
    projectsPage.slide1,
    projectsPage.slide2,
    projectsPage.slide3,
    projectsPage.slide4,
    projectsPage.slide5,
  ];
  // const video = projectsPage.videoURL;
  return (
    <div>
      <section className="header">
        <section className="title">
          <h2 id="project-title">{projectsPage.title}</h2>
          <div id="live-site">
            <ThemeProvider theme={lightTheme}>
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
            <div className="youtube-container">
              <iframe
                width="100%"
                height="100%"
                src={projectsPage.videoURL + "&autoplay=1&rel=0&modestbranding=1&controls=0&loop=1&mute=1"}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
          </div>
          </div>
        </section>
      </section>
      <section className="Highlight-container">
        <main className="sandbox">
          <h2 id="highlight-title">KEY FEATURES</h2>
          <div id="carousel-box">
            <section className="sandbox__carousel">
              <FeaturesCarousel
                pages={slide_pages}
                slides={SLIDES}
                options={OPTIONS}
              />
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default ProjectPage;
