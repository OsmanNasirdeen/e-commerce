import React from "react";
import Form from "./form/Form";
import "./Payment.css";
const Payment = () => {
  return (
    <section id="payment-section">
      <div className="payment-form-wrapper">
        <h4>Card Information</h4>

        <Form />
      </div>
    </section>
  );
};

export default Payment;
