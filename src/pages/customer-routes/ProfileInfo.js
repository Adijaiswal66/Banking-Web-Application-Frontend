import React from "react";
import Base from "../../components/Base";
import BeneficiaryDetails from "../../components/BeneficiaryDetails";
import CustomerDetails from "../../components/CustomerDetails";

function ProfileInfo() {
  return (
    <Base>
      <div>
        <CustomerDetails />
        <BeneficiaryDetails />
      </div>
    </Base>
  );
}

export default ProfileInfo;
