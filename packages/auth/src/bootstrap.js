import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// mount the func to start up the project
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  // memory history for child projects
  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate({ pathname: containerNextRoute }) {
      const { pathname } = history.location;
      if (pathname !== containerNextRoute) history.push(containerNextRoute);
    },
  };
};

// And if we're in development or isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const elem = document.querySelector("#_auth-dev-root");

  if (elem) {
    mount(elem, { defaultHistory: createBrowserHistory() });
  }
}

// we are running the container
// And we should export the mount function
export { mount };
