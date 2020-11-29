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
          name={projects[0].title}
          image={projects[0].image}
          description={projects[0].description}
          link={projects[0].link}
          github={projects[0].github}
        />

        <div className="row projects">
          <div className="col-md-4 col-sm">
            <a
              href="https://tranquil-citadel-07940.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="assets\BurgerDemo.JPG"
                className="img-fluid portfolio-img"
                alt="Demo of Tom's Burger Application Project"
              />
            </a>
          </div>
          <div className="col-md-8 col-sm">
            <h3 className="red">Burger Application</h3>
            <p className="white">
              This application demonstrates a simple full stack development
              application with front end implemented with an HTML/CSS and
              Bootstrap 4. The backend is implemented with Node.js and Express
              and deployed to Heroku. The database was constructed with MySQL
              and implemented to Heroku with JawsDB. The HTML templating was
              completed with Handlebars. The app allows the user to enter any
              burger name to add it to the menu. This enters the burger's
              information into the MySQL database. When a burger is created, it
              is added to the available burger menu, and it's default "devoured"
              status is set to false. When the user clicks the "Devour" button
              to eat a burger, then it changes the saved "devoured" boolen to
              false in the database, and the burger is moved to the "devoured"
              menu.
            </p>
            <a
              type="button"
              className="btn btn-outline-light"
              href="https://github.com/TomOverland/Burger"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
            <a
              type="button"
              className="btn btn-outline-light"
              href="https://tranquil-citadel-07940.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>

        <div className="row projects">
          <div className="col-md-4 col-sm">
            <a
              href="https://fathomless-savannah-39390.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="assets\ticket-tracker.JPG"
                className="img-fluid portfolio-img"
                alt="Demo of Tom's Ticket Tracker project"
              />
            </a>
          </div>
          <div className="col-md-8 col-sm">
            <h3 className="red">Ticket Tracker</h3>
            <p className="white">
              Full Stack Service Desk Application that allows users to track
              issues by creating, viewing, updating and removing tickets. This
              project was created with the help of four other contributors. My
              role on this project was to write the JavaScript, create the
              backend, manage the repository, and provide assistance to my other
              teammates.
            </p>
            <a
              type="button"
              className="btn btn-outline-light"
              href="https://github.com/TomOverland/Ticket-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
            <a
              type="button"
              className="btn btn-outline-light"
              href="https://fathomless-savannah-39390.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>

        <div className="row mt-4 projects">
          <div className="col-md-4 col-sm">
            <a
              href="https://github.com/TomOverland/Employee-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="assets\employee-tracker.gif"
                className="img-fluid portfolio-img"
                alt="Demo of Tom's Employee Tracker Command Line Interface"
              />
            </a>
          </div>
          <div className="col-md-8 col-sm">
            <h3 className="red">Employee Tracker</h3>
            <p className="white">
              This command line application can be used to preform basic Human
              Resource management functions, such as view and manage employees,
              roles, salaries, and departments for a business. This application
              was developed with JavaScript, Inquirer, MySQL, and Node.js.
            </p>
            <a
              type="button"
              className="btn btn-outline-light"
              href="https://github.com/TomOverland/Employee-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="row mt-4 projects">
          <div className="col-md-4 col-sm">
            <a
              href="https://github.com/TomOverland/Team-Profile-Generator"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./assets/Screenshot-of-Application.JPG"
                className="img-fluid portfolio-img"
                alt="demo of Tom's Team Profile Application"
              />
            </a>
          </div>
          <div className="col-md-8 col-sm">
            <h3 className="red">Team Profile Generator</h3>
            <p className="white">
              This Node command line application will dynamically create a HTML
              page containing contact information about your employees. The
              employee's information is generated through inquirer prompts, and
              through the use of ES6 classes each employee can have specific
              roles. I created this CLI with Node, Inquirer, Jest, HTML,
              JavaScript, Bootstrap 4, and Font Awesome.
            </p>
            <a
              type="button"
              className="btn btn-outline-light"
              href="https://github.com/TomOverland/Team-Profile-Generator"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

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
              create, modify, and delete notes which are saved to a database.
              The application was developed with JavaScript, Node.js and
              Express. I deployed the application on Heroku.
            </p>
            <a
              type="button"
              className="btn btn-outline-light"
              href="https://github.com/TomOverland/Note-Taker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
            <a
              type="button"
              className="btn btn-outline-light"
              href="https://aqueous-spire-77025.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
