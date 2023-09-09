import React, { useEffect, useState, useRef } from "react";
import "../assets/css/project.css";
import projectItems from "./projectItems";
import Cards from "../components/Card";
import { Link } from "react-router-dom";
function createCard(props){
    return  <Link
    key={props.id}
    to={`/projects/${props.id}`}
  >
    <div className="card-container">
      <div className="card">
        {/* <div className="container"> */}
          <img src={props.imgURL} alt="err" />
        {/* </div> */}
      </div>
      <div className="project-title">{props.title}</div>
      <div className="hr"></div>
    </div>
  </Link>
}

function Projects() {

  return (
      <div>
        <section id="header">
          <div className="intro-title">
            <div>New era of desinging</div> 
            <div>begins here</div>
            <div className="hr" style={{margin: "35px 4px", width: "38vw" }}></div>
          </div>
        </section>
        <section id="project-items">
          {projectItems.map(createCard)}
        </section>
      </div>
  );
};

export default Projects;
