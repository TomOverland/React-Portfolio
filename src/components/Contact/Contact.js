import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center mt-4 mb-4">
            <h1 className="gray">
              I want to turn your concept into{" "}
              <span className="red">reality.</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4 white">
          Contact Me
        </h2>
      </section>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <p className="gray">
              Email:{" "}
              <a
                href="mailto:Thomas.C.Overland@gmail.com"
                className="darkwhite"
              >
                Thomas.C.Overland@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <p className="gray">
              Phone: <span className="darkwhite">651-208-2982</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex mb-3 justify-content-center">
            <a
              href="https://drive.google.com/file/d/1pa6L8Xy4B1BS9oh3oAFTnw4IweTMQO5u/view?usp=sharing"
              className="darkwhite"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex mb-3 justify-content-center">
            <a
              href="https://github.com/TomOverland"
              className="darkwhite"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <a
              href="https://www.linkedin.com/in/thomasoverland"
              className="darkwhite"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
