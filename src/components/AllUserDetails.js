import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../services/Helper";
import AllUserList from "./AllUserList";
import NoteContext from "../contextAPI/noteContext";
function AllUserDetails() {
  const { getCurrentUserDetail, update,userList } = useContext(NoteContext);


  // useEffect(() => {
  //   getAllCustomer();
  // }, []);

 
  return (
    <div>
      <div className="container">
        <h3 className="my-4 mt-4">Registered Users : </h3>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  id
                </th>
                <th className="text-center" scope="col">
                  First Name
                </th>
                <th className="text-center" scope="col">
                  Last Name
                </th>
                <th className="text-center" scope="col">
                  Email address
                </th>
                <th className="text-center" scope="col">
                  Phone No.
                </th>
                <th className="text-center" scope="col">
                  address
                </th>
                <th className="text-center" scope="col">
                  Account No.
                </th>
                <th className="text-center" scope="col">
                  Account Balance
                </th>
              </tr>
            </thead>
            <tbody>
              <AllUserList userList={userList} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllUserDetails;
