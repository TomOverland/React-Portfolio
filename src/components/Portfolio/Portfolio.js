import React from "react";
import Project from "../Project/Project";
import projects from "../../projects.json";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <header className="container mt-3">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h2 className="white">
              Check out my latest web software development portfolio projects
            </h2>
          </div>
        </div>
      </header>

      <div className="container">
        <Project
          title={projects[0].title}
          image={projects[0].image}
          description={projects[0].description}
          link={projects[0].link}
          github={projects[0].github}
        />
        <Project
          title={projects[1].title}
          image={projects[1].image}
          description={projects[1].description}
          link={projects[1].link}
          github={projects[1].github}
        />
        <Project
          title={projects[2].title}
          image={projects[2].image}
          description={projects[2].description}
          link={projects[2].link}
          github={projects[2].github}
        />
        <Project
          title={projects[3].title}
          image={projects[3].image}
          description={projects[3].description}
          link={projects[3].link}
          github={projects[3].github}
        />
        <Project
          title={projects[4].title}
          image={projects[4].image}
          description={projects[4].description}
          link={projects[4].link}
          github={projects[4].github}
        />
        <Project
          title={projects[5].title}
          image={projects[5].image}
          description={projects[5].description}
          link={projects[5].link}
          github={projects[5].github}
        />
      </div>
    </div>
  );
}

export default Portfolio;
