import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NoteContext from "../contextAPI/noteContext";

function PrivateRoute({ allowedRoles }) {
  const { isLoggedIn, user } = useContext(NoteContext);

  // Check if the user is logged in
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  // Check if the user data has loaded
  if (!user || user.length === 0) {
    // You can return a loading spinner or nothing while the user data is loading
    return <div>Loading...</div>;
  }

  // Extract the user's roles (an array of role names)
  const userRoles = user?.roles?.map((role) => role.name);

  // Check if any of the user's roles are in the allowedRoles array
  const hasAccess = allowedRoles.some((role) => userRoles.includes(role));

  if (allowedRoles && !hasAccess) {
    // If the user's roles don't match the allowedRoles, redirect to an unauthorized page
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
