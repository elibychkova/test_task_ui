import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComrareWizard from "../src/Containers/ComrareWizard";

function ComrareWizardApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ComrareWizard} />
        <Route exact path="/compare-wizard" component={ComrareWizard} />
      </Switch>
    </BrowserRouter>
  );
}

export default ComrareWizardApp;
