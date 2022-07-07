import React from "react";
import Pic from "../../components/Resume";
import {Link} from "react-router-dom"

function Resume() {
  return (
    <div>
      <Link className="resume-goBack" to="/site">
        <span> &#8592;</span> <span>Home</span>
      </Link>
      <div>
        <Pic />
      </div>
    </div>
  );
}

export default Resume;
