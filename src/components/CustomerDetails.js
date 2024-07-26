import React from "react";
import LoginForm from "./LoginForm";
import { getCurrentUserDetail } from "../auth";

function CustomerDetails() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <h6
                className="card-title"
                style={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                Hi, User Name
              </h6>

              <div className="row my-4">
                <div className="col-md-6">
                  <h6 className="card-title mb-0">Email</h6>
                  <p className="card-text">Useremail@gmail.com</p>
                </div>
                <div className="col-md-6">
                  <h6 className="card-title mb-0">Phone Number</h6>
                  <p className="card-text">932388283983</p>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-6">
                  <h6 className="card-title mb-0">Account Number</h6>
                  <p className="card-text">92174971917397</p>
                </div>
                <div className="col-md-6">
                  <h6 className="card-title mb-0">Address</h6>
                  <p className="card-text">Jagtdal, Kolkata</p>
                </div>
              </div>

              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <h6
                className="card-title"
                style={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                Available Balance: 91,000
              </h6>

              <div className="row my-4">
                <div className="col-md-6">
                  <h6 className="card-title mb-0">Email</h6>
                  <p className="card-text">Useremail@gmail.com</p>
                </div>
                <div className="col-md-6">
                  <h6 className="card-title mb-0">Phone Number</h6>
                  <p className="card-text">932388283983</p>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-6">
                  <h6 className="card-title mb-0">Account Number</h6>
                  <p className="card-text">92174971917397</p>
                </div>
                <div className="col-md-6">
                  <h6 className="card-title mb-0">Address</h6>
                  <p className="card-text">Jagtdal, Kolkata</p>
                </div>
              </div>

              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
