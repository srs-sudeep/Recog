import React from 'react';
import { ReactDOM } from 'react-dom';
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
    const date = new Date();
    const currTime = date.getHours()
        + ':' + date.getMinutes() + " IST";
    const [hoverRef, isHovered] = useHover();
    const [hoverRef2, isHovered2] = useHover();
    const [hoverRef3, isHovered3] = useHover();
    return (
        <section id="footer">
        <footer className="footer-container">
            <div id="footer-mid">
                <div id="footer-mid-1">Recog X</div>
                <div id="footer-mid-2">Let's Work Together</div>
                <div id="footer-mid-3">

                    <div id="footer-mid-line"></div>
                    <div id="footer-mid-btn">
                    <ThemeProvider theme={lightTheme}>
                        <Page>

                            <FramerMagnetic>
                                <ButtonMagnetic ref={hoverRef} onClick={() => console.log("clicked")}>
                                    Contact Us
                                </ButtonMagnetic>
                            </FramerMagnetic>
                        </Page>
                    </ThemeProvider>
                    </div>
                </div>
                <div id="footer-mid-4">
                    <ThemeProvider theme={lightTheme}>
                        <Page>

                            <FramerMagnetic>
                                <ButtonMagnetic shape={{ borderRadius: "25px", height: "4.25em", fontSize: "0.9rem", bakcgroundColor: "black" }} ref={hoverRef2} onClick={() => console.log("clicked")} >
                                    recogX@gmail.com
                                </ButtonMagnetic>
                            </FramerMagnetic>
                        </Page>
                    </ThemeProvider>
                    <ThemeProvider theme={lightTheme}>
                        <Page>

                            <FramerMagnetic>
                                <ButtonMagnetic shape={{ borderRadius: "25px", height: "4.25em", fontSize: "0.9rem", bakcgroundColor: "black" }} ref={hoverRef3} onClick={() => console.log("clicked")} >
                                    +91 9770552422
                                </ButtonMagnetic>
                            </FramerMagnetic>
                        </Page>
                    </ThemeProvider>
                    {/* <Button variant="outlined" size="large">recogX@gmail.com</Button> */}
                    {/* <Button variant="outlined" size="large" >+91 9770552422</Button> */}
                </div>
            </div>
            <div id="footer-bottom">
                <div className="footer-bottom-container-1">
                    <div className="subcontainer1"><span className='botto'>Version</span><br/> 2023 &#169;Edition</div>
                    <div className="subcontainer2"><span className="botto">Time</span> <br/> {currTime}</div>
                </div>
                <div className="footer-bottom-container-2">
                    <div className="subconatinera"><span className="botto">Socials</span></div>
                    <div className="subconatinerb">
                        <div className="subcont1">Instagram</div>
                        <div className="subcont2">Linkedin</div>
                        <div className="subcont3">Github</div>
                    </div>
                </div>
            </div>

        </footer>
        </section>
    );
};

export default Footer;
