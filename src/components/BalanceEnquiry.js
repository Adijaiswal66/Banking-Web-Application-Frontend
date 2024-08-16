import React, { useContext, useState } from "react";
import Base from "./Base";
import NoteContext from "../contextAPI/noteContext";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../services/Helper";

function BalanceEnquiry() {
  const { getCurrentUserDetail, update, userList } = useContext(NoteContext);

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setBalanceData({
      ...balanceData,
      [field]: actualValue,
    });
  };

  const handleResetButton = (e) => {
    setBalanceData({
      fromAccountNumber: "",
    });
  };

  const [balanceData, setBalanceData] = useState({
    fromAccountNumber: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (balanceData.fromAccountNumber.trim === "") {
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
    balanceEnquiryForCustomers();
  };

  const balanceEnquiryForCustomers = async () => {
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
        balanceData.fromAccountNumber.trim() ===
        String(userList[i].accountNumber)
      ) {
        foundUserId = userList[i].userId;
        break;
      }
    }

    if (foundUserId) {
      // console.log("User ID found: " + foundUserId);
      await axios
        .get(`${base_url}/transactions/balance/${foundUserId}`, balanceData)
        .then((response) => {
          let data = response.data;
          console.log(data);
          setBalanceData(data);

          if (data !== "Insufficient balance") {
            toast.info(data, {
              position: "bottom-center",
              autoClose: 5000,
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
    <Base>
      <div className="container">
        <h4 className="text-center" style={{ margin: "3rem" }}>
          Enter details to check your balance
        </h4>
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
              value={balanceData.fromAccountNumber}
              onChange={(e) => handleChange(e, "fromAccountNumber")}
            />
          </div>

          <div className="buttons d-flex justify-content-evenly mt-3">
            <button
              type="button"
              className="btn btn-sm btn-success"
              style={{ marginRight: "-5rem" }}
              onClick={handleFormSubmit}
            >
              Check Balance
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
  );
}

export default BalanceEnquiry;
