import React from "react";
import { Link } from "react-router-dom";
import Form from "./form/Form";
import "./logIn.css";
const LogIn = () => {
  return (
    <section id="logIn-section">
      <div className="logIn-form-wrapper">
        <h4>Sign In</h4>
        <Form />
        <div className="signUp-logIn-link">
          or create an account ? <Link to="/signUp">Sign up</Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default LogIn;
