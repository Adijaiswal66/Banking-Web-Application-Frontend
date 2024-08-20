import React from "react";
import Base from "../../components/Base";
import BeneficiaryDetails from "../../components/BeneficiaryDetails";
import CustomerDetails from "../../components/CustomerDetails";

function ProfileInfo() {

  return (
    <div style={{backgroundColor:"antiquewhite"}}>
      <Base>
        <CustomerDetails />
        <BeneficiaryDetails />
      </Base>
    </div>
  );
}

export default ProfileInfo;
