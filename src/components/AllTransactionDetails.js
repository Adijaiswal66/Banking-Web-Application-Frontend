import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../contextAPI/noteContext";
import axios from "axios";
import { base_url } from "../services/Helper";
import AllTransactionsList from "./AllTransactionsList";
import Base from "./Base";

function AllTransactionDetails() {
  const { getCurrentUserDetail } = useContext(NoteContext);
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    getAlltransactionsById();
  }, []);

  const getAlltransactionsById = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;

    await axios
      .get(`${base_url}/user/admin/transactions`)
      .then((response) => {
        let data = response.data;
        setTransactionList(data);
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
                <AllTransactionsList transactionList={transactionList} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default AllTransactionDetails;
