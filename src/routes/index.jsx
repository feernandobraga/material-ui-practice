import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ClientForm from "../pages/ClientForm";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/client/:clientId" component={ClientForm} />
      <Route path="/client" component={ClientForm} />
    </Switch>
  );
};

export default Routes;
