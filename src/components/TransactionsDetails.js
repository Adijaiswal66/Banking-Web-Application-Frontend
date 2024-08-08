import React, { useContext, useEffect, useState } from "react";
import Base from "./Base";
import TransactionList from "./TransactionList";
import axios from "axios";
import { base_url } from "../services/Helper";
import NoteContext from "../contextAPI/noteContext";

function TransactionsDetails() {
  const {
    getCurrentUserDetail} = useContext(NoteContext);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    getAlltransactionsById();
  });

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
    <Base>
      <div>
        <div className="container">
          <h3 className="my-3">Transaction History: </h3>
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-center" scope="col">
                    Txn. id
                  </th>
                  <th className="text-center" scope="col">
                    Source Account Number
                  </th>
                  <th className="text-center" scope="col">
                    Target Account Number
                  </th>
                  <th className="text-center" scope="col">
                    Transferred Amount
                  </th>
                  <th className="text-center" scope="col">
                    Transaction Date & Time
                  </th>
                  <th className="text-center" scope="col">
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
      </div>
    </Base>
  );
}

export default TransactionsDetails;
