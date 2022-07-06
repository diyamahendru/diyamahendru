import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/site" exact component={Home} />
        <Route path="/site/blogs" exact component={Blogs} />
        <Route path="/site/blog/:id" component={Blog} />
        <Redirect to="/site" />
      </Switch>
    </div>
  );
};

export default App;
