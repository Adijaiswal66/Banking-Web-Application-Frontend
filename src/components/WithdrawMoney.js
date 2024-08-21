import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../contextAPI/noteContext";
import { base_url } from "../services/Helper";
import { Bounce, toast } from "react-toastify";
import Base from "./Base";
import bgImage7 from "../img/bgImage7.jpg";

function WithdrawMoney() {
  const { getCurrentUserDetail, update, userList } = useContext(NoteContext);

  const [transferdata, setTransferData] = useState({
    toAccountNumber: "",
    transferredAmount: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setTransferData({
      ...transferdata,
      [field]: actualValue,
    });
  };

  const handleResetButton = () => {
    setTransferData({
      toAccountNumber: "",
      transferredAmount: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      transferdata.transferredAmount.trim() === "" ||
      transferdata.toAccountNumber.trim() === ""
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
        transferdata.toAccountNumber.trim() ===
        String(userList[i].accountNumber)
      ) {
        foundUserId = userList[i].userId;
        break;
      }
    }

    if (foundUserId) {
      // console.log("User ID found: " + foundUserId);
      await axios
        .post(
          `${base_url}/transactions/withdraw/${foundUserId}?transferredAmount=${transferdata.transferredAmount.trim()}`,
          transferdata
        )
        .then((response) => {
          let data = response.data;
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
  const style = {
    backgroundImage: `url(${bgImage7})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    height: "100vh", // Adjust as needed
    width: "100%", // Adjust as needed
  };

  return (
    <div className="" style={style}>
      <Base>
        <div style={{ marginTop: "6rem", marginLeft: "30rem" }}>
          <h4
            className="text-center my-4"
            style={{
              backgroundColor: "steelblue",
              color: "whitesmoke",
              borderRadius: "6px",
              padding: "0.7rem",
              width: "50%",
              margin: "auto",
            }}
          >
            Enter details to withdraw money
          </h4>
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

            <div className="buttons d-flex justify-content-evenly mt-4">
              <button
                type="button"
                className="btn btn-sm btn-success"
                style={{ marginRight: "-5rem" }}
                onClick={handleFormSubmit}
              >
                Withdraw
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
    </div>
  );
}

export default WithdrawMoney;
