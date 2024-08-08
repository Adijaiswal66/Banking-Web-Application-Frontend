import React, { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import { loginUser } from "../services/user-service";
import { useNavigate } from "react-router-dom";
import NoteContext from "../contextAPI/noteContext";

function LoginForm() {
  const { doLogin } = useContext(NoteContext);
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

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

          navigate("/customer/profile");
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

    // loginUser(loginDetail)
    //   .then((jwtTokenData) => {
    //     console.log("loginDetail: " + JSON.stringify(loginDetail));

    //     console.log("jwtTokenData: " + JSON.stringify(jwtTokenData));
    //     doLogin(jwtTokenData, () => {
    //       if (jwtTokenData.token) {
    //         toast.success("User logged in successfully", {
    //           position: "bottom-center",
    //           autoClose: 2000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //           transition: Bounce,
    //         });
    //         navigate("/customer/dashboard");
    //         // return;
    //       }

    //       if (jwtTokenData === "Credentials Invalid !!") {
    //         toast.error(jwtTokenData, {
    //           position: "bottom-center",
    //           autoClose: 2000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //           transition: Bounce,
    //         });
    //         navigate("/login");
    //       }

    //       if (jwtTokenData === undefined) {
    //         navigate("/login");
    //         return;
    //       }
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error("Something went wrong !!", {
    //       position: "bottom-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       transition: Bounce,
    //     });
    //   });
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

  return (
    <>
      <Navbar />
      <div className="">
        <form style={{ width: "22rem", paddingTop: "5rem" }} className="m-auto">
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
