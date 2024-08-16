import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import NoteContext from "../contextAPI/noteContext";

function Navbar() {
  const { getCurrentUserDetail, user, doLogout, isLoggedIn, isAdmin } =
    useContext(NoteContext);

  const [login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(isLoggedIn());
    // setUser(user);
  }, []);

  const handleLoginButton = () => {
    setInterval(() => {
      setLogin(isLoggedIn());
      // setUser(user);
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
    });
  };

  // Check if the user has the 'ROLE_ADMIN' role

  // console.log("user in Navbar: " + JSON.stringify(user));
  // console.log("getCurrentUserDetail in Navbar: " + JSON.stringify(getCurrentUserDetail()));

  if (
    !user ||
    getCurrentUserDetail() === "Credentials Invalid !!" ||
    user === null ||
    getCurrentUserDetail() === undefined
  ) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              ApnaBank
              <AccountBalanceOutlinedIcon
                style={{ marginLeft: "3px", marginTop: "-5px" }}
              />
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
                  className="btn btn-outline-success mx-2 "
                  type="submit"
                  to="/login"
                  onClick={handleLoginButton}
                >
                  Login
                  <LoginOutlinedIcon
                    style={{ marginLeft: "3px", marginTop: "-5px" }}
                  />
                </Link>

                {/* <Link
                  className="btn btn-outline-success"
                  type="submit"
                  to="/signup"
                >
                  Signup
                </Link> */}
                <Link>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Signup
                  </button>
                </Link>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog " style={{ marginTop: "10rem" }}>
                    <div className="modal-content">
                      <div className="modal-header"></div>

                      <div className="row my-4 text-center">
                        <div className="col-md-6 text-center">
                          <Link to="/signup-admin">
                            <button
                              type="button"
                              className="btn btn btn-info"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Sign in as Admin{" "}
                            </button>
                          </Link>
                        </div>
                        <div className="col-md-6 text-center">
                          <Link to="/signup-customer">
                            <button
                              type="button"
                              className="btn btn btn-info "
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Sign in as Customer{" "}
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  const profileUrl = isAdmin
    ? "/admin/admin-profile"
    : "/customer/customer-profile";

  const transactionUrl = isAdmin
    ? "/admin/all-transactions"
    : "/customer/transactions";

  if (user || getCurrentUserDetail !== undefined) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              ApnaBank
              <AccountBalanceOutlinedIcon
                style={{ marginLeft: "3px", marginTop: "-5px" }}
              />
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
                  <Link className="nav-link" to={profileUrl}>
                    Profile
                  </Link>
                </li>

                {isAdmin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard">
                      Dashboard
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  <Link className="nav-link" to={transactionUrl}>
                    Transactions
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/customer/profile"
                  >
                    {user.firstName + " "}
                    {user.lastName}
                  </Link>
                </li>
                <li className="nav-item" style={{ marginRight: "5px" }}>
                  <Link to="/customer/profile">
                    <lord-icon
                      src="https://cdn.lordicon.com/fmasbomy.json"
                      trigger="hover"
                      state="hover-looking-around"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "-5px",
                        marginTop: "3px",
                      }}
                    ></lord-icon>
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
                  className="btn btn-outline-danger mx-2"
                  type="submit"
                  to="/home"
                >
                  Logout
                  <LogoutIcon
                    style={{ marginLeft: "3px", marginTop: "-5px" }}
                  />
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
