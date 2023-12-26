import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

// for adding prefix in production class names
// So that classnames doesn't collide with other sub project
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});
export default ({ history, onSignIn }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
