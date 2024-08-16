import React, { useContext, useState } from "react";
import Base from "./Base";
import NoteContext from "../contextAPI/noteContext";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../services/Helper";

function DepositMoney() {
  const { getCurrentUserDetail, update, userList } = useContext(NoteContext);

  const [depositdata, setDepositData] = useState({
    toAccountNumber: "",
    transferredAmount: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setDepositData({
      ...depositdata,
      [field]: actualValue,
    });
  };

  const handleResetButton = () => {
    setDepositData({
      toAccountNumber: "",
      transferredAmount: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      depositdata.transferredAmount.trim() === "" ||
      depositdata.toAccountNumber.trim() === ""
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

    withdrawMoneyFromUser();
  };

  const withdrawMoneyFromUser = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;

    let foundUserId = null;

    if (userList.length === 0) {
      console.log("No users found");
      return;
    }

    for (let i = 0; i < userList.length; i++) {
      // console.log(`Checking user: ${userList[i].accountNumber}`);
      if (
        depositdata.toAccountNumber.trim() === String(userList[i].accountNumber)
      ) {
        foundUserId = userList[i].userId;
        break;
      }
    }

    if (foundUserId) {
      // console.log("User ID found: " + foundUserId);
      await axios
        .post(
          `${base_url}/transactions/deposit/${foundUserId}?transferredAmount=${depositdata.transferredAmount.trim()}`,
          depositdata
        )
        .then((response) => {
          let data = response.data;
          console.log(data);
          setDepositData(data);

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
            update();
            return;
          }
          if (data === "Insufficient balance") {
            toast.error("Insufficient balance", {
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
        })
        .catch((error) => {
          let data = error.response.data;
          console.log(data);
          toast.error(data, {
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
        });
    } else {
      toast.error("Account number not found", {
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
    }
  };
  return (
    <>
      <Base>
        <div className="container">
          <h3 className="text-center" style={{ margin: "3rem" }}>
            Enter details to deposit money
          </h3>
          <form style={{ width: "22rem" }} className="m-auto">
            <div className="my-3">
              <label
                htmlFor="toAccountNumber"
                className="form-label d-flex mb-1"
              >
                Source Account Number
              </label>
              <input
                type="text"
                id="toAccountNumber"
                className="form-control"
                value={depositdata.toAccountNumber}
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
                value={depositdata.transferredAmount}
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
                Deposit
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

export default DepositMoney;
