import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { getCurrentUserDetail } from "../auth";
import { base_url } from "../services/Helper";
import BeneficiaryList from "./BeneficiaryList";
import NoteContext from "../contextAPI/noteContext";

function BeneficiaryDetails() {
  const { getCurrentUserDetail, update } = useContext(NoteContext);
  update();
  const [beneficiary, setBeneficiary] = useState([]);

  useEffect(() => {
    getAllBeneficiary();
  }, []);

  const getAllBeneficiary = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;

    axios
      .get(`${base_url}/user/beneficiary/${getCurrentUserDetail().user.userId}`)
      .then((response) => {
        let data = response.data;
        setBeneficiary(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <h3 className="my-3">Your Beneficiaries: </h3>
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
                  Account Number
                </th>
                <th className="text-center" scope="col">
                  Bank Name
                </th>
                <th className="text-center" scope="col">
                  Transfer Limit
                </th>
              </tr>
            </thead>
            <tbody>
              <BeneficiaryList beneficiary={beneficiary} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BeneficiaryDetails;
