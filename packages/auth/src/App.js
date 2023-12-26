import React from "react";
import Button from "@material-ui/core/Button";
import { Router, Switch, Route, Link } from "react-router-dom";
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
        {/* <Link to="/auth/signin">
          <Button variant="outlined" color="primary">
            Pricing
          </Button>
        </Link> */}
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
