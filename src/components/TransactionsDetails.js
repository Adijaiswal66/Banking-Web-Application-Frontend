import React, { useContext, useEffect, useState } from "react";
import Base from "./Base";
import TransactionList from "./TransactionList";
import axios from "axios";
import { base_url } from "../services/Helper";
import NoteContext from "../contextAPI/noteContext";

function TransactionsDetails() {
  const { getCurrentUserDetail } = useContext(NoteContext);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    getAlltransactionsById();
  }, []);

  const getAlltransactionsById = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;

    await axios
      .get(
        `${base_url}/user/customer/transaction/${
          getCurrentUserDetail().user.userId
        }`
      )
      .then((response) => {
        let data = response.data;
        setTransaction(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{ backgroundColor: "antiquewhite" }}>
      <Base>
        <div className="container">
          <h4
            className="my-4 d-flex justify-content-center"
            style={{
              backgroundColor: "teal",
              color: "whitesmoke",
              borderRadius: "6px",
              padding: "0.7rem",
              width: "30%",
              margin: "auto",
            }}
          >
            Transaction History:{" "}
          </h4>
          <div className="row">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th
                    className="text-center"
                    scope="col"
                    style={{ backgroundColor: "antiquewhite" }}
                  >
                    Txn. id
                  </th>
                  <th
                    className="text-center"
                    scope="col"
                    style={{ backgroundColor: "antiquewhite" }}
                  >
                    Source Account Number
                  </th>
                  <th
                    className="text-center"
                    scope="col"
                    style={{ backgroundColor: "antiquewhite" }}
                  >
                    Target Account Number
                  </th>
                  <th
                    className="text-center"
                    scope="col"
                    style={{ backgroundColor: "antiquewhite" }}
                  >
                    Transferred Amount
                  </th>
                  <th
                    className="text-center"
                    scope="col"
                    style={{ backgroundColor: "antiquewhite" }}
                  >
                    Transaction Date & Time
                  </th>
                  <th
                    className="text-center"
                    scope="col"
                    style={{ backgroundColor: "antiquewhite" }}
                  >
                    Transaction Type
                  </th>
                </tr>
              </thead>
              <tbody>
                <TransactionList transaction={transaction} />
              </tbody>
            </table>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default TransactionsDetails;
