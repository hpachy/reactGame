import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/app/component/App";
import * as serviceWorker from "./serviceWorker";

// Provider wrap the <App /> to let all the application to have access to it
import { Provider } from "react-redux";

// import the store
import {store} from './config/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
