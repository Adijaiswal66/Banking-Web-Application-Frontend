import React from "react";
import AdminDashboard from "../../components/AdminDashboard";
import AllUserDetails from "../../components/AllUserDetails";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MoneyIcon from '@mui/icons-material/Money';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import VerifiedIcon from '@mui/icons-material/Verified';



function AdminProfile() {
  return (
    <div>
      <AdminDashboard />
      {/* <AllUserDetails /> */}
      <div className="container mt-5">
      <div className="row my-4">
        <div className="col-md-4">
          <Button variant="contained" startIcon={<CurrencyExchangeIcon />} fullWidth>
          Transfer money
          </Button>
        </div>
        <div className="col-md-4">
          <Button variant="contained" startIcon={<CreditScoreIcon />} fullWidth>
          Withdraw money
          </Button>
        </div>
        <div className="col-md-4">
          <Button variant="contained" startIcon={<MonetizationOnIcon />} fullWidth>
          Deposit money
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Button variant="contained" startIcon={<AssignmentIndIcon />} fullWidth>
          Open account for customer
          </Button>
        </div>
        <div className="col-md-4">
          <Button variant="contained" startIcon={<MoneyIcon />} fullWidth>
          Balance Inquiry
          </Button>
        </div>
        <div className="col-md-4">
          <Button variant="contained" startIcon={<VerifiedIcon />} fullWidth>
          KYC
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminProfile;
