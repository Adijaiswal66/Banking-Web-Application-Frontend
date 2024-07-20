import React, { useState } from "react";
import Navbar from "./Navbar";
import { Bounce, toast } from "react-toastify";
import { signUp } from "../services/user-service";
function SignupForm() {
  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setData({
      ...data,
      [field]: actualValue,
    });
  };

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      data.firstName.trim() == "" ||
      data.lastName.trim() == "" ||
      data.address.trim() == "" ||
      data.userEmail.trim() == "" ||
      data.phoneNumber.trim() == "" ||
      data.password.trim() == ""
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

    console.log(data);
    signUp(data)
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
        if (error.response.data.password) {
          toast.error(error.response.data.password, {
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

  const handleResetButton = (e) => {
    setData({
      firstName: "",
      lastName: "",
      userEmail: "",
      password: "",
      phoneNumber: "",
      address: "",
    });
  };

  const [type, setType] = useState("password");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <>
      <Navbar />
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
              value={data.firstName}
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
              value={data.lastName}
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
              value={data.phoneNumber}
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
              value={data.address}
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
              value={data.userEmail}
              onChange={(e) => handleChange(e, "userEmail")}
            />
            <div id="userEmail" className="form-text d-flex">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-1">
            <label htmlFor="password" className="form-label d-flex mb-1">
              Password
            </label>
            <input
              type={type}
              name="password"
              className="form-control"
              id="password"
              value={data.password}
              onChange={(e) => handleChange(e, "password")}
            />
          </div>
          <div className="mb-1 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="togglePassword"
              onChange={handleToggle}
            />
            <label
              className="form-check-label toggleButton d-flex"
              htmlFor="togglePassword"
            >
              Show password
            </label>
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
    </>
  );
}

export default SignupForm;
