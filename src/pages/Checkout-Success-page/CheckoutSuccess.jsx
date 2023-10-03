import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutSuccess.css";
const CheckoutSuccess = () => {
  return (
    <section id="checkout-success-section">
      <h1>order received</h1>
      <div className="order-success-msg">
        Thank you for your purchase We will send you an email as soon as your
        parcel is on its way.
      </div>
      <div className="checkout-success-btn-container">
        <Link to="/">
          <button className="btn-back-home">back to homepage</button>
        </Link>
        <button className="btn-view-order">view order</button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
