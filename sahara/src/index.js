import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootId = document.getElementById("root");
ReactDOM.render(<App />, rootId);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./App", () => {
    const App = require("./App").default;
    ReactDOM.render(<App />, rootId);
  });
}
