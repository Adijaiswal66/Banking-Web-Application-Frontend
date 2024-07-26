import React, { useEffect, useState } from "react";
import Base from "./Base";
import { getCurrentUserDetail, isLoggedIn } from "../auth";
import { base_url } from "../services/Helper";
import axios from "axios";
import BeneficiaryList from "./BeneficiaryList";

function BeneficiaryDetails() {
  const [id, setId] = useState(0);
  const [beneficiary, setBeneficiary] = useState([]);

  useEffect(() => {
    getAllBeneficiary();
  }, []);

  const getAllBeneficiary = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;

    await axios
      .get(`${base_url}/user/beneficiary/${getCurrentUserDetail().user.userId}`)
      .then((response) => {
        let data = response.data;
        console.log(data);
        setBeneficiary(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <h3 className="my-3">Beneficiaries</h3>
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
                  Email
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
