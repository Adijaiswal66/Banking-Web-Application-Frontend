import React from "react";

function CustomerDetails() {
  return (
    <div className="container">
      <div className="card" style={{width: "18rem"}} >
        <div className="card-body">
          <h6 className="card-title">Customer Name</h6>
          <h6 className="card-title">Account Number</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
