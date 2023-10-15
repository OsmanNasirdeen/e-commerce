import React from "react";
import { Link } from "react-router-dom";
import Form from "./form/Form";
import "./signUp.css";
const SignUp = () => {
  return (
    <section id="SignUp-section">
      <div className="SignUp-form-wrapper">
        <h4>Sign Up</h4>
        <Form />
        <div className="signUp-logIn-link">
          already registered ? <Link to="/logIn">Log In</Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
