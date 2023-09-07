import React from "react";
import "./css/Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link key={props.id} to={`/projects/${props.id}`}>
      <div className="card-container">
        <div className="card">
          <div className="container">
            <img src={props.imgURL} alt="err" />
          </div>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="hr"></div>
      </div>
    </Link>
  );
}

export default Card;
