import axios from "axios";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { getCurrentUserDetail } from "../auth";
import { base_url } from "../services/Helper";
import Base from "./Base";

function EditCustomerProfile() {
  // const [user, setUser] = useState(getCurrentUserDetail());

  const [updatedData, setUpdatedData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    userEmail: getCurrentUserDetail().user.userEmail,
    address: "",
  });

  const handleResetButton = (e) => {
    setUpdatedData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      userEmail: getCurrentUserDetail().user.userEmail
    });
  };

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setUpdatedData({
      ...updatedData,
      [field]: actualValue,
    });
  };

  const updateUser = async (updatedData) => {
    console.log(getCurrentUserDetail());
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;
    await axios
      .put(
        `${base_url}/user/customer/${getCurrentUserDetail().user.userId}`,
        updatedData
      )
      .then((response) => response.data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      updatedData.firstName.trim() === "" ||
      updatedData.lastName.trim() === "" ||
      updatedData.address.trim() === "" ||
      updatedData.phoneNumber.trim() === ""
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

    console.log(updatedData);

    updateUser(updatedData)
      .then((resp) => {
        console.log(resp);
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
        if (error.response.data.firstName) {
          toast.error(error.response.data.firstName, {
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
        if (error.response.data.lastName) {
          toast.error(error.response.data.lastName, {
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
        if (error.response.data.userEmail) {
          toast.error(error.response.data.userEmail, {
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

        if (error.response.data.phoneNumber) {
          toast.error(error.response.data.phoneNumber, {
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
        if (error.response.data.address) {
          toast.error(error.response.data.address, {
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
  // console.log(user);
  return (
    <Base>
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
              value={updatedData.firstName}
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
              value={updatedData.lastName}
              onChange={(e) => handleChange(e, "lastName")}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="phoneNumber" className="form-label d-flex mb-1">
              Enter contact number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
              value={updatedData.phoneNumber}
              onChange={(e) => handleChange(e, "phoneNumber")}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="address" className="form-label d-flex mb-1">
              Enter address
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={updatedData.address}
              onChange={(e) => handleChange(e, "address")}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="userEmail" className="form-label d-flex mb-1">
              Enter email address
            </label>
            <input
              type="userEmail"
              id="userEmail"
              className="form-control"
              value={getCurrentUserDetail().user.userEmail}
              disabled
            />
            <div id="userEmail" className="form-text d-flex">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="buttons d-flex justify-content-evenly mt-3">
            <button
              type="button"
              className="btn btn-sm btn-success"
              style={{ marginRight: "-5rem" }}
              onClick={handleFormSubmit}
            >
              Update
            </button>
            <button
              type="reset"
              onClick={handleResetButton}
              className="btn btn-sm btn-dark"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </Base>
  );
}

export default EditCustomerProfile;
