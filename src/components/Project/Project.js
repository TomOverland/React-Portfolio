import React from "react";
import "./Project.css";

function Project() {
  return (
    <div>
      <div className="row mt-4 projects">
        <div className="col-md-4 col-sm">
          <a href="aqueous-spire-77025.herokuapp.com/" target="_blank">
            <img
              src="assets\Note_Taker.JPG"
              className="img-fluid portfolio-img"
              alt="demo of Tom's note taker application"
            />
          </a>
        </div>
        <div className="col-md-8 col-sm">
          <h3 className="red">Note Taker</h3>
          <p className="white">
            A server-side note taker application which allows the user to
            create, modify, and delete notes which are saved to a database. The
            application was developed with JavaScript, Node.js and Express. I
            deployed the application on Heroku.
          </p>
          <a
            type="button"
            className="btn btn-outline-light"
            href="https://github.com/TomOverland/Note-Taker"
            target="_blank"
          >
            GitHub Repository
          </a>
          <a
            type="button"
            className="btn btn-outline-light"
            href="https://aqueous-spire-77025.herokuapp.com/"
            target="_blank"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
