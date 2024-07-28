import React from "react";
import Base from "../../components/Base";
import AddBeneficiary from "../../components/AddBeneficiary";

const CustomerDashBoard = () => {
  return (
    <Base>
      <div className="container">
        <AddBeneficiary />
      </div>
    </Base>
  );
};

export default CustomerDashBoard;
