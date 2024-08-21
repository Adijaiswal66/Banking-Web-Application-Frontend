import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../services/Helper";
import AllUserList from "./AllUserList";
import NoteContext from "../contextAPI/noteContext";
function AllUserDetails() {
  const { getCurrentUserDetail, update, userList } = useContext(NoteContext);

  // useEffect(() => {
  //   getAllCustomer();
  // }, []);

  return (
    <div className="container">
      <h4
        className="mt-5 mb-4 d-flex justify-content-center"
        style={{
          backgroundColor: "teal",
          color: "whitesmoke",
          borderRadius: "6px",
          padding: "0.7rem",
          width: "26%",
          margin: "auto",
        }}
      >
        Registered Users{" "}
      </h4>
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th
                className="text-center"
                scope="col"
                style={{ backgroundColor: "antiquewhite" }}
              >
                Id
              </th>
              <th
                className="text-center"
                scope="col"
                style={{ backgroundColor: "antiquewhite" }}
              >
                First Name
              </th>
              <th
                className="text-center"
                scope="col"
                style={{ backgroundColor: "antiquewhite" }}
              >
                Last Name
              </th>
              <th
                className="text-center"
                scope="col"
                style={{ backgroundColor: "antiquewhite" }}
              >
                Email Address
              </th>
              <th
                className="text-center"
                scope="col"
                style={{ backgroundColor: "antiquewhite" }}
              >
                Phone No.
              </th>
              <th
                className="text-center"
                scope="col"
                style={{ backgroundColor: "antiquewhite" }}
              >
                Address
              </th>
              <th
                className="text-center"
                scope="col"
                style={{ backgroundColor: "antiquewhite" }}
              >
                Account No.
              </th>
              <th
                className="text-center"
                scope="col"
                style={{ backgroundColor: "antiquewhite" }}
              >
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
  );
}

export default AllUserDetails;
