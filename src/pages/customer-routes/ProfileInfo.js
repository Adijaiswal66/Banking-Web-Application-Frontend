import React from "react";
import Base from "../../components/Base";
import CustomerDetails from "../../components/CustomerDetails";
import BeneficiaryDetails from "../../components/BeneficiaryDetails";
import BeneficiaryList from "../../components/BeneficiaryList";

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
