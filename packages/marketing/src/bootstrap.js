import React from 'react';
import  ReactDOM   from 'react-dom';
import App from './App';
// mount the func to start up the project
const mount = (el) => {
  ReactDOM.render(
    <App/>,
    el
  );
}
// And if we're in development or isolation
// call mount immediately
if (process.env.NODE_ENV === 'development'){
  const elem = document.querySelector('#_marketing-dev-root');

  if (elem) mount(elem);
}

// we are running the container
// And we should export the mount function
export {mount};