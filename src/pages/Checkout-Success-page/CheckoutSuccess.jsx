import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CheckoutSuccess.css";
const CheckoutSuccess = ({ user }) => {
  const navigate = useNavigate();

  const backHomePage = () => {
    navigate("/");
    location.reload();
  };
  return (
    <section id="checkout-success-section">
      <h1>order received</h1>
      <div className="order-success-msg">
        Thank you for your purchase, Mr/Mrs {user.lastName}. We will send you an
        email as soon as your parcel is on its way.
      </div>
      <div className="checkout-success-btn-container">
        {/* <Link to="/"></Link> */}
        <button
          className="btn-back-home"
          onClick={() => {
            backHomePage();
          }}>
          back to homepage
        </button>
        <button className="btn-view-order">view order</button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
