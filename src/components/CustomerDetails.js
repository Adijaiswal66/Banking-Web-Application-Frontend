import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { base_url } from "../services/Helper";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Link } from "react-router-dom";
import NoteContext from "../contextAPI/noteContext";

const CustomerDetails = () => {
  const { getCurrentUserDetail, user, update } = useContext(NoteContext);
  const [beneficiary, setBeneficiary] = useState([]);
  const [beneficiaryId, setBeneficiaryId] = useState("");
  useEffect(() => {
    getAllBeneficiary();
   
    // getCurrentUserDetail();
  }, []);

  const getAllBeneficiary = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;

    await axios
      .get(`${base_url}/user/beneficiary/${getCurrentUserDetail().user.userId}`)
      .then((response) => {
        let data = response.data;
        setBeneficiary(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setTransferData({
      ...transferdata,
      [field]: actualValue,
    });
  };

  const handleResetButton = (e) => {
    setTransferData({
      transferredAmount: "",
      toAccountNumber: " ",
    });
  };

  const [transferdata, setTransferData] = useState({
    transferredAmount: " ",
    toAccountNumber: " ",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      transferdata.transferredAmount.trim === "" ||
      transferdata.toAccountNumber.trim === ""
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
    trasnferAmountToBeneficiary();
  };
  const trasnferAmountToBeneficiary = async (accountNumber) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;
    for (var i = 0; i < beneficiary.length; i++) {
      if (
        transferdata.toAccountNumber.trim() === beneficiary[i].accountNumber
      ) {
        setBeneficiaryId(beneficiary[i].beneficiaryId);
      }
    }
    // console.log("beneficiaryId : " + beneficiaryId);
    await axios
      .post(
        `${base_url}/transactions/transfer/${
          getCurrentUserDetail().user.userId
        }/${beneficiaryId}?transferredAmount=${transferdata.transferredAmount.trim()}  `,
        transferdata
      )
      .then((response) => {
        let data = response.data;
        console.log(response);
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
          // setUser(user);
          // console.log(user.user.availableBalance);
          return;
        }
        if (data === "Insufficient balance") {
          toast.error("Insufficient balance", {
            position: "botto  m-center",
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
        update();
      })
      .catch((error) => {
        console.log(error);
        let data = error.response.data;
        console.log(data);
        // if (data === "Insufficient balance") {
        toast.error(data, {
          position: "botto  m-center",
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
        // }
      });
  };
  // console.log("user inside CustomerDetails: " + user);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6
                  className="card-title text-center"
                  style={{ fontWeight: "bold", fontSize: "2rem" }}
                >
                  Hi, {user.firstName} {user.lastName}
                </h6>

                <div className="row my-4 text-center">
                  <div className="col-md-6">
                    <h6 className="card-title mb-0">Email</h6>
                    <p className="card-text">{user.userEmail}</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <h6 className="card-title mb-0">Phone Number</h6>
                    <p className="card-text ">{user.phoneNumber}</p>
                  </div>
                </div>

                <div className="row my-3 text-center">
                  <div className="col-md-6">
                    <h6 className="card-title mb-0">Account Number</h6>
                    <p className="card-text">{user.accountNumber}</p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="card-title mb-0">Address</h6>
                    <p className="card-text">{user.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6
                  className="card-title text-center"
                  style={{ fontWeight: "bold", fontSize: "2rem" }}
                >
                  Available Balance : {user.availableBalance}
                </h6>

                <div className="row my-4 text-center">
                  <div className="col-md-12">
                    <h6
                      className="card-title"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      Total Beneficiaries : {beneficiary.length}
                    </h6>
                  </div>
                </div>
                <div className="text-center my-4">
                  <div className="row my-4 text-center">
                    <div className="col-md-6 text-center">
                      <Link to="/customer/edit-profile">
                        <button type="button" className="btn btn btn-info ">
                          Update Profile{" "}
                          <EditNoteIcon style={{ marginTop: "-3px" }} />
                        </button>
                      </Link>
                    </div>
                    <div className="col-md-6 text-center">
                      <button
                        type="button"
                        className="btn btn btn-info "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Transfer Money{" "}
                        <CurrencyExchangeIcon style={{ marginTop: "-3px" }} />
                      </button>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" style={{ marginTop: "4rem" }}>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5 text-center"
                            id="exampleModalLabel"
                          >
                            Enter details to transfer money
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* Modal body starts here */}

                          <form style={{ width: "22rem" }} className="m-auto">
                            <div className="mb-3">
                              <label
                                htmlFor="fromAccountNumber"
                                className="form-label d-flex mb-1"
                              >
                                Source account number
                              </label>
                              <input
                                type="text"
                                id="fromAccountNumber"
                                className="form-control"
                                value={user.accountNumber}
                                disabled
                              />
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="toAccountNumber"
                                className="form-label d-flex mb-1"
                              >
                                Target account number
                              </label>
                              <input
                                type="text"
                                id="toAccountNumber"
                                className="form-control"
                                value={transferdata.toAccountNumber}
                                onChange={(e) => {
                                  handleChange(e, "toAccountNumber");
                                  trasnferAmountToBeneficiary(e.target.value);
                                }}
                              />
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="transferredAmount"
                                className="form-label d-flex mb-1"
                              >
                                Enter transfer amount
                              </label>
                              <input
                                type="text"
                                id="transferredAmount"
                                placeholder="INR"
                                className="form-control"
                                value={transferdata.transferredAmount}
                                onChange={(e) =>
                                  handleChange(e, "transferredAmount")
                                }
                              />
                            </div>

                            <div className="buttons d-flex justify-content-evenly mt-4">
                              <button
                                type="button"
                                className="btn btn-sm btn-success"
                                style={{ marginRight: "-5rem" }}
                                onClick={handleFormSubmit}
                              >
                                Transfer
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
