import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="">
            <h3 className="fs-5" style={{ textDecoration: "none" }}>
              Brokerage Calculator
            </h3>
          </a>
          <ul
            className="text=muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            <li>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>
            <li>
              For Delivery based trades, a minimum of ₹0.01 will be charged per
              contract note.
            </li>
            <li>
              Clients who opt to receive physical contract notes will be charged
              ₹20 per contract note plus courier charges.
            </li>
            <li>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="">
            <h3 className="fs-5" style={{ textDecoration: "none" }}>
              List of charges
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
