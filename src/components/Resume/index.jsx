import React from "react";
import { Download } from "react-feather";
import "./styles.css"

function Pic() {
  return (
    <div className="resume">
      <div className="resume-pic">
        <img src="/assets/images/resume.png" alt="resume-pic" />
      </div>
      <div className="resume-download">
        <a href="/assets/pdfs/DIYA-MAHENDRU-RESUME.pdf" download>
          <Download className="icon"/>
        </a>
      </div>
    </div>
  );
}

export default Pic;
