import React from "react";
import Landingpage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import Project from "./project";
import Contact from "./contact";
import Aboutme from "./aboutme";
import Resume from "./resume";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/Projects" component={Project} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Aboutme" component={Aboutme} />
      <Route exact path="/MyResume" component={Resume} />
    </Switch>
  );
}

export default Main;
