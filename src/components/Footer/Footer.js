import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <ul className="social d-flex justify-content-center">
        <li>
          <a
            href="http://github.com/TomOverland"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/thomasoverland"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
