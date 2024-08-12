import React, { useContext, useEffect, useState } from "react";
import Base from "../components/Base";
import NoteContext from "../contextAPI/noteContext";
import AllUserDetails from "./AllUserDetails";
function AdminDashboard() {
  const { getCurrentUserDetail, user, update } = useContext(NoteContext);

  useEffect(()=>{
    
    <AllUserDetails />
  },[])

  return (
    <Base>
      <div>
        <AllUserDetails />
      </div>
    </Base>
  );
}

export default AdminDashboard;
