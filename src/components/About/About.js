import React from "react";
import TomPhoto from "./TomPhoto.JPG";
import "./About.css";
import PDF from '../../files/Resume_TomOverland.docx.pdf';

function About() {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h1 className="white">Hi, I'm Tom.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h2 className="red">I design and build digital products.</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <img
              src={TomPhoto}
              id="profile-photo"
              className="img-fluid"
              alt="Tom Overland"
            />
          </div>
          <div className="col-3"></div>
        </div>
      </div>

      <div className="container biography mt-3">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <p className="white">
              I am a Front-End Developer leveraging an emergency services
              background to find creative solutions to modern day problems. I am
              completing a certificate in Full Stack Development from University
              of Minnesota, with newly developed skills in HTML, CSS,
              JavaScript, React.js and responsive website design. I am known as
              a team player passionate about developing applications, with a
              focus on mobile-first design and development. With each project,
              my aim is to best engage my audience for an impactful user
              experience. I’m excited to leverage my skills as part of a
              fast-paced, quality-driven team to build better experiences on the
              web.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex mb-3 justify-content-center">
            <a
              href={PDF}
              className="darkwhite"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
