import React from "react";
import Button from "../../../components/button/button";
import Input from "../../../components/input/Input";
import Select from "../../../components/customSelect/select";
import "./Form.css";
const Form = () => {
  return (
    <div id="checkout-form-wrapper">
      <div className="form-title">
        <h3>shipping information</h3>
      </div>
      <form>
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
            }}
          />
        </div>
        <div className="shipping-address-wrapper">
          <p>shipping address</p>
          <Select
            details={{
              selectName: "city",
              options: ["tamale", "accra", "kumasi"],
              className: "select-primary",
            }}
          />
          <div className="city-field-wrapper">
            <select name="city" id="city">
              <option value="Accra">Accra</option>
              <option value="Accra">kumasi</option>
              <option value="Accra">Tamale</option>
              <option value="Accra">Navrongo</option>
            </select>
          </div>
          <div className="username-field-wrapper">
            <Input
              details={{
                className: "primary-input",
                type: "text",
                name: "firstName",
                id: "firstName",
                placeholder: "first name",
                width: "45%",
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
              }}
            />
          </div>
          <div className="address-field-wrapper">
            <Input
              details={{
                className: "primary-input",
                type: "text",
                name: "address",
                id: "address",
                placeholder: "address",
                width: "100%",
              }}
            />
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
              }}
            />
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
