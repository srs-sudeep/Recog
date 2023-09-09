import { background } from "@chakra-ui/react";
import React from "react";
import { GhostNavbar } from "react-hamburger-menus";



const GhostNavbar1 = () => {
  return (
      <GhostNavbar
        styles={{
          fontColor: "#fff",
          fontHoverColor: "black",
          listHoverColor: ["transparent", "#fff"],
          floatButtonX: 87,
          floatButtonY: 15,
          navigationButton: {
            borderRadius: "5px",
            width: "50px",
            backgroundColor: "white"
          },
          navigationBackground: {
            backgroundColor: "black",
            fontColor:"white"
          },
          iconColor: "#fff"
        }}
      >
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
  );
};

export default GhostNavbar1;
