import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginForm from "./LoginForm";
import { isLoggedIn } from "../auth";

function PrivateRoute() {
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoute;
