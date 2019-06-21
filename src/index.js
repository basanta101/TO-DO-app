import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
//import Login from './Components/Login/LoginContainer'
import {Provider} from "react-redux";
import Store from "./Components/Store";
import "./Components/Login/styles.css";
import AppRouter from "./Components/Routes/AppRouter";

ReactDOM.render(
  <Provider store={Store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
