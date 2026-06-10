import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="text-center row">
        <h1 className="mt-4 fs-2">Open a Zerodha account</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more
        </p>
        <a href="/signup">
          <button
            className="p-2 mt-3 mb-5 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </a>
      </div>
    </div>
  );
}

export default OpenAccount;
