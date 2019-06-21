import React, { Component } from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  //console.log(Cookies.get('token'));
  console.log("props from pr is", props);
  const { component: Component  , ...rest } = props;
  const isAuthenticated = !!Cookies.get("token");
  return (
    <Route
      {...rest} //spread operator here
      render = {(props) =>isAuthenticated ? < Component {...props}/> : <Redirect to="/" />} 
    />
  );
};
export default PrivateRoute;
