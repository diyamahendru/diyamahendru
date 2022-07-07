import React from "react";
import "./styles.css";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <div className="intro-pic">
          <img
            src="/assets/images/intropic.png"
            className="display-picture"
            alt="display-pic"
          />
        </div>
        <div className="intro-text2">
          <h4>I'm Diya Mahendru</h4>
          <h6>
            Full-Stack Developer
          </h6>
        </div>
        <div className="intro-para">
          <p>Always on the lookout for interesting projects to build and work out of my comfort zone. When not programming, I like to indulge in reading, playing chess or doing yoga. </p>
        </div>
        {/* <div className="footer">
          <a href="/site/blogs">Blog</a>
          <a href="/assets/pdfs/DIYA-MAHENDRU-RESUME.pdf" download>
            Resume
          </a>
          <a href=">Connect</a>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
