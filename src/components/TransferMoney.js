import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../contextAPI/noteContext";
import { base_url } from "../services/Helper";
import { Bounce, toast } from "react-toastify";
import Base from "./Base";

function TransferMoney() {
  const { getCurrentUserDetail, user, update } = useContext(NoteContext);
  const [beneficiary, setBeneficiary] = useState([]);
  const [beneficiaryId, setBeneficiaryId] = useState("");

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
        setBeneficiary(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setTransferData({
      ...transferdata,
      [field]: actualValue,
    });
  };

  const handleResetButton = (e) => {
    setTransferData({
      fromAccountNumber: "",
      toAccountNumber: " ",
      transferredAmount: "",
    });
  };

  const [transferdata, setTransferData] = useState({
    fromAccountNumber: "",
    toAccountNumber: " ",
    transferredAmount: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      transferdata.transferredAmount.trim === "" ||
      transferdata.toAccountNumber.trim === "" ||
      transferdata.fromAccountNumber.trim === ""
    ) {
      toast.error("Please fill up all the fields before submitting", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    trasnferAmountToBeneficiary();
  };

  const trasnferAmountToBeneficiary = async (accountNumber) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;
    for (var i = 0; i < beneficiary.length; i++) {
      if (
        transferdata.toAccountNumber.trim() === beneficiary[i].accountNumber
      ) {
        setBeneficiaryId(beneficiary[i].beneficiaryId);
      }
    }
    // console.log("beneficiaryId : " + beneficiaryId);
    await axios
      .post(
        `${base_url}/transactions/transfer/${
          getCurrentUserDetail().user.userId
        }/${beneficiaryId}?transferredAmount=${transferdata.transferredAmount.trim()}  `,
        transferdata
      )
      .then((response) => {
        let data = response.data;
        console.log(response);
        console.log(data);
        setTransferData(data);

        if (data !== "Insufficient balance") {
          toast.success(data, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          handleResetButton();
          // setUser(user);
          // console.log(user.user.availableBalance);
          return;
        }
        if (data === "Insufficient balance") {
          toast.error("Insufficient balance", {
            position: "botto  m-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          return;
        }
        update();
      })
      .catch((error) => {
        console.log(error);
        let data = error.response.data;
        console.log(data);
        // if (data === "Insufficient balance") {
        toast.error(data, {
          position: "botto  m-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
        // }
      });
  };
  return (
    <>
      <Base>
        <div className="container">
          <h3 className="text-center" style={{ margin: "3rem" }}>
            Enter details to transfer money
          </h3>
          <form style={{ width: "22rem" }} className="m-auto">
            <div className="mb-1">
              <label
                htmlFor="fromAccountNumber"
                className="form-label d-flex mb-1"
              >
                Source Account Number
              </label>
              <input
                type="text"
                id="fromAccountNumber"
                className="form-control"
                value={transferdata.fromAccountNumber}
                onChange={(e) => handleChange(e, "fromAccountNumber")}
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="toAccountNumber"
                className="form-label d-flex mb-1"
              >
                Target Account Number
              </label>
              <input
                type="text"
                id="toAccountNumber"
                className="form-control"
                value={transferdata.toAccountNumber}
                onChange={(e) => handleChange(e, "toAccountNumber")}
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="transferredAmount"
                className="form-label d-flex mb-1"
              >
                Transfer Amount
              </label>
              <input
                type="text"
                id="transferredAmount"
                className="form-control"
                value={transferdata.transferredAmount}
                onChange={(e) => handleChange(e, "transferredAmount")}
              />
            </div>

            <div className="buttons d-flex justify-content-evenly mt-3">
              <button
                type="button"
                className="btn btn-sm btn-success"
                style={{ marginRight: "-5rem" }}
                onClick={handleFormSubmit}
              >
                Trasnfer
              </button>
              <button
                type="reset"
                className="btn btn-sm btn-dark"
                onClick={handleResetButton}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </Base>
    </>
  );
}

export default TransferMoney;
