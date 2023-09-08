import React, { useEffect, useState } from "react";
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
            <video width="100%" height="auto" controls>
              <source src={projectsPage.videoURL} type="video/mp4" />
            </video>
          </div>
        </section>
        {/* <section className="text">
          Scroll to Explore more...
        </section> */}
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
