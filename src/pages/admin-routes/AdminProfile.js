import React, { useContext } from "react";
import AdminDashboard from "../../components/AdminDashboard";
import AllUserDetails from "../../components/AllUserDetails";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MoneyIcon from "@mui/icons-material/Money";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Link } from "react-router-dom";
import Base from "../../components/Base";
import NoteContext from "../../contextAPI/noteContext";

function AdminProfile() {
  const { getCurrentUserDetail, user, update } = useContext(NoteContext);

  return (
    <div style={{ height: "100vh", backgroundColor: "antiquewhite" }}>
      <Base>
        <div className="container mt-5 d-flex justify-content-evenly">
          <div className="row">
            <div className="col-md-12">
              <div
                className="card"
                style={{
                  width: "30rem",
                  backgroundColor: "lightsteelblue",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
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

        {/* <AllUserDetails /> */}
        <div className="container" style={{ marginTop: "5rem", width: "80%" }}>
          <div className="row my-4">
            <div className="col-md-4">
              <Link to="/admin/transfer-money">
                <Button
                  variant="contained"
                  startIcon={<CurrencyExchangeIcon />}
                  fullWidth
                >
                  Transfer money
                </Button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/admin/withdraw-money">
                <Button
                  variant="contained"
                  startIcon={<CreditScoreIcon />}
                  fullWidth
                >
                  Withdraw money
                </Button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/admin/deposit-money">
                <Button
                  variant="contained"
                  startIcon={<MonetizationOnIcon />}
                  fullWidth
                >
                  Deposit money
                </Button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" >
              <Link
                to="/signup-customer"
                
              >
                <Button
                  variant="contained"
                  startIcon={<AssignmentIndIcon />}
                  fullWidth
                >
                  Open account for customers
                </Button>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/admin/balance-enquiry">
                <Button variant="contained" startIcon={<MoneyIcon />} fullWidth>
                  Balance Inquiry
                </Button>
              </Link>
            </div>
            <div className="col-md-4">
              <Button
                variant="contained"
                startIcon={<VerifiedIcon />}
                fullWidth
              >
                KYC
              </Button>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default AdminProfile;
