import React, { useState, useEffect } from "react";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/button";
import Select from "../../../components/customSelect/select";
import { validateForm } from "./validateForm";
import "./Form.css";
const Form = () => {
  const [showMobilePayments, setShowMobilePayments] = useState(false);
  const [user, setUser] = useState({ cardName: "", cardNumber: "" });
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setShouldSubmit(true);
  };
  // submit form when no errs
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && shouldSubmit) {
      console.log(`${JSON.stringify(user)}`);
    }
  }, [formErrors]);
  return (
    <form id="checkout-payment-form" onSubmit={handleSubmit}>
      <div className="payment-type-wrapper">
        <div>
          <input
            type="radio"
            name="payment-type"
            id="credit-card"
            value="card"
            onClick={() => setShowMobilePayments(false)}
          />{" "}
          <label htmlFor="credit-card">Credit Card</label>
        </div>
        <div>
          <input
            type="radio"
            name="payment-type"
            id="mobile-payment"
            value="mobile-payment"
            onClick={() => {
              setShowMobilePayments(true);
            }}
          />{" "}
          <label htmlFor="mobile-payment">mobile payment</label>
        </div>
      </div>
      {showMobilePayments ? (
        <Select
          details={{
            selectName: "mobile-network",
            className: "mobile-network select-primary",
            options: ["MTN", "VODAFONE"],
          }}
        />
      ) : (
        ""
      )}
      <div className="card-name-wrapper">
        <label htmlFor="card-name">Card Owner</label>
        <Input
          details={{
            className: "primary-input",
            type: "text",
            name: "cardName",
            id: "card-name",
            placeholder: "card Owner Name",
            width: "100%",
            controls: { handleChange },
          }}
        />
        <div className="form-error-msg">{formErrors.cardName}</div>
      </div>
      <div className="card-number-wrapper">
        <label htmlFor="card-number">card number</label>
        <Input
          details={{
            className: "primary-input",
            type: "text",
            name: "cardNumber",
            id: "card-number",
            placeholder: "card number",
            width: "100%",
            controls: { handleChange },
          }}
        />
        <div className="form-error-msg">{formErrors.cardNumber}</div>
      </div>

      <div className="payment-submit-btn-wrapper">
        <Button
          details={{
            text: "Place Order",
            className: "btn-violet",
            type: "submit",
          }}
        />
      </div>
    </form>
  );
};

export default Form;
