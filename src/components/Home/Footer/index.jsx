import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="line">
        <img src="/assets/images/rugged-line.png" />
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/diya-mahendru/">
          <Linkedin />
        </a>
      </div>
      <div className="icons">
        <a href="https://github.com/diyamahendru">
          <GitHub />
        </a>
      </div>
      <div className="icons">
        <a href="https://twitter.com/diyatweeets">
          <Twitter />
        </a>
      </div>
      <div className="line">
        <img src="/assets/images/rugged-line.png" />
      </div>
    </div>
  );
}

export default Footer;
