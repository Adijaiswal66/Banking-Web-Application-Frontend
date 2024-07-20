import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

function LoginForm() {
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetail);
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or password is required", {
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
  };

  const handleResetButton = (e) => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  return (
    <>
    <Navbar />
    <div className="">
      <form style={{ width: "22rem", paddingTop: "5rem" }} className="m-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label d-flex">
            Email address
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            value={loginDetail.username}
            onChange={(e) => handleChange(e, "username")}
          />
          <div id="emailHelp" className="form-text d-flex">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label d-flex">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={loginDetail.password}
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label d-flex" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="buttons d-flex justify-content-evenly">
          <button
            type="button"
            className="btn btn-sm btn-success"
            style={{ marginRight: "-5rem" }}
            onClick={handleFormSubmit}
          >
            Log in
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

export default LoginForm;
