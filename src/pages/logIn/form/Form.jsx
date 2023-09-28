import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/button";
import validateForm from "./validateForm";
import "./form.css";

const Form = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
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

  const URL = "http://localhost:7000/users/logIn";
  const loginUser = () => {
    axios
      .post(URL, user)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => console.log(error.response.data));
  };

  // submit form when no errs
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && shouldSubmit) {
      loginUser();
    }
  }, [formErrors]);
  return (
    <form id="logIn-form" onSubmit={handleSubmit}>
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
      <div className="logIn-submit-btn-wrapper">
        <Button
          details={{
            text: "Log in",
            className: "btn-violet",
            type: "submit",
          }}
        />
      </div>
    </form>
  );
};

export default Form;
