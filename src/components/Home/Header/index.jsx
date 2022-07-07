import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Header() {
  const history = useHistory();

  return (
    <div className="header">
      <div className="buttons" onClick={() => history.push("/site/blogs")}>
        Blog
      </div>
      <div className="buttons" onClick={() => history.push("/site/resume")}>
        Resume
      </div>
    </div>
  );
}

export default Header;
