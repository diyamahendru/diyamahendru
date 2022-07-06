import React from "react";
import "./styles.css";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <div classname="intro-text1">
          <h2> Hey there!</h2>
        </div>
        <div className="intro-pic">
          <img
            src="https://diyamahendru.github.io/site/assets/images/intropic.png"
            className="display-picture"
            alt="display-pic"
          />
        </div>
        <div className="intro-text2">
          <h4>I am Diya Mahendru</h4>
          <h6>
            MERN Stack Developer | Book Nerd | Budding Chess Player | Yoga
            Enthusiast
          </h6>
        </div>
        <div className="footer">
          <a href="/site/blogs">Blog</a>
          <a href="/assets/pdfs/DIYA-MAHENDRU-RESUME.pdf" download>
            Resume
          </a>
          <a href="https://www.linkedin.com/in/diya-mahendru/">Connect</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
