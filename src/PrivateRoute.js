import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ children, ...rest }) {
  const a = localStorage.getItem("status");
  return (
    <Route
      {...rest}
      render={() => {
        return a ? children : <Redirect to="/login" />;
      }}
    />
  );
}
