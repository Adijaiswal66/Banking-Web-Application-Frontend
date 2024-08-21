import React, { useContext, useEffect, useState } from "react";
import Base from "../components/Base";
import NoteContext from "../contextAPI/noteContext";
import AllUserDetails from "./AllUserDetails";
function AdminDashboard() {
  const { getCurrentUserDetail, user, update } = useContext(NoteContext);

  useEffect(() => {
    <AllUserDetails />;
  }, []);

  return (
    <div style={{height:"100vh", backgroundColor: "antiquewhite" }}>
      <Base>
        <AllUserDetails />
      </Base>
    </div>
  );
}

export default AdminDashboard;
