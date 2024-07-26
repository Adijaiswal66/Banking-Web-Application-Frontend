import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import { Bounce, toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   setLogin(isLoggedIn());

  //   setUser(getCurrentUserDetail());
  // }, [login]);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const handleLoginButton = () => {
    setInterval(() => {
      setLogin(isLoggedIn());
      setUser(getCurrentUserDetail());
    }, 1000);
  };

  const logOut = () => {
    doLogout(() => {
      setLogin(false);
      toast.success("User logged out successfully", {
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
      // navigate("/home");
    });
  };

  if (!user) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              ApnaBank
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <Link
                  className="btn btn-outline-success mx-2"
                  type="submit"
                  to="/login"
                  onClick={handleLoginButton()}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-outline-success"
                  type="submit"
                  to="/signup"
                >
                  Signup
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              ApnaBank
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/customer/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/customer/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/customer/transactions">
                    Transactions
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Action</Link></li>
              <li><Link className="dropdown-item" to="#">Another action</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="#">Something else here</Link></li>
            </ul>
          </li> */}
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/ProfileInfo"
                  >
                    {user.user.firstName + " "}
                    {user.user.lastName}
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                {/* <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                /> */}

                <Link
                  onClick={logOut}
                  className="btn btn-outline-success mx-2"
                  type="submit"
                  to="/home"
                >
                  Logout
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
