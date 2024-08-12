import React, { useContext, useState } from "react";
import Base from "../components/Base";
import NoteContext from "../contextAPI/noteContext";
function AdminDashboard() {
  const { getCurrentUserDetail, user, update } = useContext(NoteContext);

  return (
    <Base>
      <div className="container mt-5 d-flex justify-content-evenly">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ width: "30em" }}>
              <div className="card-body">
                <h6
                  className="card-title text-center"
                  style={{ fontWeight: "bold", fontSize: "2rem" }}
                >
                  Hi, {user.firstName} {user.lastName}
                </h6>

                <div className="row my-4 text-center">
                  <div className="col-md-6">
                    <h6 className="card-title mb-0">Email</h6>
                    <p className="card-text">{user.userEmail}</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <h6 className="card-title mb-0">Phone Number</h6>
                    <p className="card-text ">{user.phoneNumber}</p>
                  </div>
                </div>

                <div className="row my-3 text-center">
                  <div className="col-md-6">
                    <h6 className="card-title mb-0">Account Number</h6>
                    <p className="card-text">{user.accountNumber}</p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="card-title mb-0">Address</h6>
                    <p className="card-text">{user.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default AdminDashboard;
