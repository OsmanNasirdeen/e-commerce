import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/button";
import Input from "../../../components/input/Input";
import Select from "../../../components/customSelect/select";
import { validateForm } from "./validateForm";
import "./Form.css";
const Form = () => {
  const navigate = useNavigate();
  const cityOptions = ["Tamale", "Accra", "Navrongo", "kumasi"];
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    apartment: "",
    location: "",
    address: "",
    city: cityOptions[0],
  });
  const [formErrors, setFormErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setShouldSubmit(true);
  };

  // submit form when no errors
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && shouldSubmit) {
      console.log(`${JSON.stringify(user)}`);
      navigate("/payment");
    }
  }, [formErrors]);
  return (
    <div id="checkout-form-wrapper">
      <div className="form-title">
        <h3>shipping information</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contact-field-wrapper">
          <label htmlFor="email">email</label>
          <Input
            details={{
              type: "email",
              id: "email",
              name: "email",
              className: "primary-input",
              placeholder: " email here",
              width: "100%",
              controls: { handleChange },
            }}
          />
          <div className="form-error-msg">{formErrors.email}</div>
        </div>
        <div className="shipping-address-wrapper">
          <p>shipping address</p>
          <Select
            details={{
              selectName: "city",
              className: "select-primary",
              options: cityOptions,
              controls: { handleChange },
              value: user.city,
            }}
          />
          <div className="form-error-msg">{formErrors.firstName}</div>
          <div className="username-field-wrapper">
            <Input
              details={{
                className: "primary-input",
                type: "text",
                name: "firstName",
                id: "firstName",
                placeholder: "first name",
                width: "45%",
                controls: { handleChange },
              }}
            />

            <Input
              details={{
                className: "primary-input",
                type: "text",
                name: "lastName",
                id: "lastName",
                placeholder: "last name",
                width: "45%",
                controls: { handleChange },
              }}
            />
          </div>
          <div className="form-error-msg">{formErrors.lastName}</div>
          <div className="address-field-wrapper">
            <Input
              details={{
                className: "primary-input",
                type: "text",
                name: "address",
                id: "address",
                placeholder: "address",
                width: "100%",
                controls: { handleChange },
              }}
            />
            <div className="form-error-msg">{formErrors.address}</div>
          </div>
          <div className="apartment-field-wrapper">
            <Input
              details={{
                className: "primary-input",
                type: "text",
                name: "apartment",
                id: "apartment",
                placeholder: "apartment (optional)",
                width: "100%",
                controls: { handleChange },
              }}
            />
          </div>
          <div className="location-field-wrapper">
            <Input
              details={{
                className: "primary-input",
                type: "text",
                name: "location",
                id: "location",
                placeholder: "area of residence (example medina, Zogbeli,)",
                width: "100%",
                controls: { handleChange },
              }}
            />
            <div className="form-error-msg">{formErrors.location}</div>
          </div>
        </div>
        <div className="checkout-submit-btn-wrapper">
          <Button
            details={{
              text: "proceed to Payment",
              className: "btn-violet",
              type: "text",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
