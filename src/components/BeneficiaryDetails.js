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
        <h4
          className="mt-5 mb-4 d-flex justify-content-center"
          style={{
            backgroundColor: "teal",
            color: "whitesmoke",
            borderRadius: "6px",
            padding: "0.7rem",
            width: "30%",
            margin: "auto",
          }}
        >
          Your Beneficiaries{" "}
        </h4>
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "antiquewhite" }}
                >
                  id
                </th>
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "antiquewhite" }}
                >
                  First Name
                </th>
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "antiquewhite" }}
                >
                  Last Name
                </th>
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "antiquewhite" }}
                >
                  Account Number
                </th>
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "antiquewhite" }}
                >
                  Bank Name
                </th>
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "antiquewhite" }}
                >
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
