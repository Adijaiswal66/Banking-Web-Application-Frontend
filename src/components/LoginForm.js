import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoteContext from "../contextAPI/noteContext";
import { loginUser } from "../services/user-service";
import Navbar from "./Navbar";
import bgImage2 from "../img/bgImage2.jpg";
import Base from "./Base";

function LoginForm() {
  const { doLogin, isAdmin, isCustomer, isLoggedIn } = useContext(NoteContext);

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(isAdmin ? "/admin/admin-profile" : "/customer/customer-profile");
    }
  }, [isLoggedIn, isAdmin, navigate]);

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (loginDetail.email.trim() === "" || loginDetail.password.trim() === "") {
      toast.error("email and password is required", {
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
      const jwtTokenData = await loginUser(loginDetail);
      // console.log("loginDetail: ", loginDetail);
      // console.log("jwtTokenData: ", jwtTokenData);

      if (jwtTokenData.token && jwtTokenData.user) {
        doLogin(jwtTokenData, () => {
          // console.log("Data saved in local storage:", {
          //   token: localStorage.getItem("token"),
          //   user: localStorage.getItem("user"),
          // });

          toast.success("User logged in successfully", {
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
          if (isAdmin) {
            navigate("/admin/admin-profile");
          } else if (isCustomer) {
            navigate("/customer/customer-profile");
          } else navigate("/login");
        });
      } else if (jwtTokenData === "Credentials Invalid !!") {
        toast.error(jwtTokenData, {
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
        navigate("/login");
      } else {
        console.error("Invalid response data: ", jwtTokenData);
        toast.error("Invalid response data", {
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
        navigate("/login");
      }
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
    }
  };

  const handleResetButton = (e) => {
    setLoginDetail({
      email: "",
      password: "",
    });
  };

  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const style = {
    backgroundImage: `url(${bgImage2})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    height: "100vh", // Adjust as needed
    width: "100%", // Adjust as needed
  };

  return (
    <>
      <div className="" style={style}>
        <Navbar />
        <form
          style={{ width: "22rem", paddingTop: "5rem", fontStyle: "italic" }}
          className="m-auto"
        >
          <div className="mb-1">
            <label htmlFor="email" className="form-label d-flex mb-1">
              Enter email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={loginDetail.email}
              onChange={(e) => handleChange(e, "email")}
            />
            <div id="email" className="form-text d-flex">
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
              value={loginDetail.password}
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
