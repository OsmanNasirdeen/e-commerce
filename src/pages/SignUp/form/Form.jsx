import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/button";
import validateForm from "./validateForm";
import "./form.css";
const Form = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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
  const registerUser = () => {
    axios
      .post(`${import.meta.env.VITE_USERS_ROUTE}/signUp`, user)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");

        location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  // submit form when no errs
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && shouldSubmit) {
      registerUser();
    }
  }, [formErrors]);
  return (
    <form id="signUp-form" onSubmit={handleSubmit}>
      <div className="user-firstName-wrapper">
        <label htmlFor="firstName">First name</label>
        <Input
          details={{
            className: "primary-input",
            type: "text",
            name: "firstName",
            id: "firstName",
            placeholder: "first name",
            width: "100%",
            controls: { handleChange },
          }}
        />
        <div className="form-error-msg">{formErrors.firstName}</div>
      </div>
      <div className="user-lastName-wrapper">
        <label htmlFor="lastName">Last name</label>
        <Input
          details={{
            className: "primary-input",
            type: "text",
            name: "lastName",
            id: "lastName",
            placeholder: "last name",
            width: "100%",
            controls: { handleChange },
          }}
        />
        <div className="form-error-msg">{formErrors.lastName}</div>
      </div>
      <div className="user-email-wrapper">
        <label htmlFor="user-email">Email address</label>
        <Input
          details={{
            className: "primary-input",
            type: "email",
            name: "email",
            id: "user-email",
            placeholder: "Enter email",
            width: "100%",
            controls: { handleChange },
          }}
        />
        <div className="form-error-msg">{formErrors.email}</div>
      </div>
      <div className="user-password-wrapper">
        <label htmlFor="user-password">password</label>
        <Input
          details={{
            className: "primary-input",
            type: "password",
            name: "password",
            id: "user-password",
            placeholder: "Enter password",
            width: "100%",
            controls: { handleChange },
          }}
        />
        <div className="form-error-msg">{formErrors.password}</div>
      </div>
      <div className="signUp-submit-btn-wrapper">
        <Button
          details={{
            text: "Sign Up",
            className: "btn-violet",
            type: "submit",
          }}
        />
      </div>
    </form>
  );
};

export default Form;
