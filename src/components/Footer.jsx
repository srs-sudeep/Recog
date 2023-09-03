import React from 'react';
import "./css/Footer.css";
import { logonav } from "../assets";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styled, { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { lightTheme } from "../theme/theme";
import useHover from "../utils/useHover";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonMagnetic from "./Button";
import FramerMagnetic from '../utils/framermagnetic';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Footer = () => {
    const [hoverRef, isHovered] = useHover();
    return (
        <footer className="footer-container">
            <div id="footer-mid">
                <div id="footer-mid-1">Recog X</div>
                <div id="footer-mid-2">Let's Work Together</div>
                <div id="footer-mid-3">
                    <div id="footer-mid-btn">

                    </div>
                    <ThemeProvider theme={lightTheme}>
                        {/* <Normalize /> */}
                        {/* <GlobalStyles /> */}
                        <Page>

                            <FramerMagnetic>
                                <ButtonMagnetic ref={hoverRef} onClick={() => console.log("clicked")}>
                                    Contact Us
                                </ButtonMagnetic>
                            </FramerMagnetic>
                        </Page>
                    </ThemeProvider></div>
                <div id="footer-mid-4">
                <Button variant="outlined" size="large">recogX@gmail.com</Button>
                <Button variant="outlined" size="large" >+91 9770552422</Button>
                </div>
            </div>
            {/* <div id="footer-bottom">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam natus reprehenderit, consequuntur repellat ipsum laboriosam et vitae reiciendis ad laborum consequatur obcaecati quis nisi doloribus, quam iste rem, sed neque! Quaerat possimus nam excepturi quae, officiis animi rerum esse ab incidunt voluptatibus asperiores aspernatur dolorum repellat maxime vel aliquid nobis soluta earum consequuntur quasi id tenetur. Itaque repellendus tenetur minus nisi aliquid facere, aut voluptatem ullam architecto quae laudantium iusto suscipit amet laboriosam dolores consequuntur dignissimos placeat. Ipsam eos sit porro eius, rem aliquam, amet voluptatum similique libero ipsum voluptate nam ab, laborum ad adipisci accusantium minus fugiat. Temporibus, earum!
            </div> */}

        </footer>
    );
};

export default Footer;
