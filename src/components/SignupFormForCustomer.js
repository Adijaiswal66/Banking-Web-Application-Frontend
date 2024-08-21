import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { signUpCustomer } from "../services/user-service";
import Navbar from "./Navbar";
import bgImage5 from "../img/bgImage5.jpg";
import Base from "./Base";

function SignupFormForCustomer() {
  const [type, setType] = useState("password");

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setData({
      ...data,
      [field]: actualValue,
    });
  };

  const handleFormSubmitForCustomer = async (e) => {
    e.preventDefault();
    if (
      data.firstName.trim() === "" ||
      data.lastName.trim() === "" ||
      data.address.trim() === "" ||
      data.userEmail.trim() === "" ||
      data.phoneNumber.trim() === "" ||
      data.password.trim() === ""
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
    try {
      const response = await signUpCustomer(data);
      console.log(response);
      toast.success(response, {
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
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Something went wrong !!", {
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
    }
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

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const style = {
    backgroundImage: `url(${bgImage5})`,
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundRepeat: "no-repeat", // Prevents repeating the image
    backgroundPosition: "center", // Centers the image
    height: "100vh", // Full viewport height
    width: "100%", // Full viewport width
  };

  return (
    <>
      <div className="" style={style}>
        <Base>
          <div style={{ marginTop: "0.5rem",marginLeft:"30rem" }}>
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
                  onClick={handleFormSubmitForCustomer}
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
        </Base>
      </div>
    </>
  );
}

export default SignupFormForCustomer;
