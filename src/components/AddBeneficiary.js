import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { addBeneficiary } from "../services/user-service";
import axios from "axios";
import { base_url } from "../services/Helper";
import { getCurrentUserDetail } from "../auth";

function AddBeneficiary() {
  const addBeneficiary = async (beneficiary) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;
    await axios
      .post(
        `${base_url}/user/beneficiary/${getCurrentUserDetail().user.userId}`,
        beneficiary
      )
      .then((response) => {
        let data = response.data;
        console.log(data);
        setbeneficiary(beneficiary);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setbeneficiary({
      ...beneficiary,
      [field]: actualValue,
    });
  };
  const handleResetButton = (e) => {
    setbeneficiary({
      firstName: "",
      lastName: "",
      maxTransferLimit: "",
      bankName: "",
    });
  };

   const [beneficiary, setbeneficiary] = useState({
    firstName: "",
    lastName: "",
    maxTransferLimit: "",
    bankName: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      beneficiary.firstName.trim() == "" ||
      beneficiary.lastName.trim() == "" ||
      beneficiary.maxTransferLimit.trim() == "" ||
      beneficiary.bankName.trim() == ""
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
    console.log(beneficiary);
    addBeneficiary(beneficiary)
      .then((resp) => {
        console.log("resp" + resp);
        toast.success(resp, {
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
      })
      .catch((error) => {
        console.log(error);
        if (error.response.beneficiary.firstName) {
          toast.error(error.response.beneficiary.firstName, {
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
        if (error.response.beneficiary.lastName) {
          toast.error(error.response.beneficiary.lastName, {
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
        if (error.response.beneficiary.maxTransferLimit) {
          toast.error(error.response.beneficiary.maxTransferLimit, {
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
        if (error.response.beneficiary.bankName) {
          toast.error(error.response.beneficiary.bankName, {
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
      });
  };
  return (
    <div className="container">
      <h3 className="text-center my-4">Add your beneficiary here</h3>{" "}
      <div className="">
        <form style={{ width: "22rem" }} className="m-auto">
          <div className="mb-1">
            <label htmlFor="firstName" className="form-label d-flex mb-1">
              Enter first name
            </label>
            <input
              type="text"
              id="firstName"
              className="form-control"
              value={beneficiary.firstName}
              onChange={(e) => handleChange(e, "firstName")}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="lastName" className="form-label d-flex mb-1">
              Enter last name
            </label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              value={beneficiary.lastName}
              onChange={(e) => handleChange(e, "lastName")}
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="maxTransferLimit"
              className="form-label d-flex mb-1"
            >
              Enter max transfer limit for this account
            </label>
            <input
              type="text"
              id="maxTransferLimit"
              className="form-control"
              value={beneficiary.maxTransferLimit}
              onChange={(e) => handleChange(e, "maxTransferLimit")}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="bankName" className="form-label d-flex mb-1">
              Enter bank name
            </label>
            <input
              type="bankName"
              id="bankName"
              className="form-control"
              value={beneficiary.bankName}
              onChange={(e) => handleChange(e, "bankName")}
            />
          </div>

          <div className="buttons d-flex justify-content-evenly mt-3">
            <button
              type="button"
              className="btn btn-sm btn-success"
              style={{ marginRight: "-5rem" }}
              onClick={handleFormSubmit}
            >
              Register
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
    </div>
  );
}

export default AddBeneficiary;
