import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NoteContext from "../contextAPI/noteContext";

function PrivateRoute() {
  const { isLoggedIn } = useContext(NoteContext);
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoute;
