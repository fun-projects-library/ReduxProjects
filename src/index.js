import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import myStore from "./store/index"


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
