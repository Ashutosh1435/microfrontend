import React, { Suspense, lazy } from "react";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/authApp"));

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

// for adding prefix in production class names
// So that classnames doesn't collide with other sub project
const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          {/* For lazy loading child applications */}
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
