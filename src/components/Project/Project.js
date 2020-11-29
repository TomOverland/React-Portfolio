import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div>
      <div className="row mt-4 projects">
        <div className="col-md-4 col-sm">
          <a href={props.link} target="_blank" rel="noreferrer">
            <img
              src={props.image}
              className="img-fluid portfolio-img"
              alt="demo of Tom's note taker application"
            />
          </a>
        </div>
        <div className="col-md-8 col-sm">
          <h3 className="red">{props.title}</h3>
          <p className="white">{props.description}</p>
          <a
            type="button"
            className="btn btn-outline-light"
            href={props.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
          <a
            type="button"
            className="btn btn-outline-light"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Project;
