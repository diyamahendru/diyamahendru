import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Resume from "./pages/Resume"

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/site" exact component={Home} />
        <Route path="/site/blogs" exact component={Blogs} />
        <Route path="/site/blog/:id" component={Blog} />
        <Route path="/site/resume" component={Resume} />
        <Redirect to="/site" />
      </Switch>
    </div>
  );
};

export default App;
