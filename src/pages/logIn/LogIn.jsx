import React from "react";
import Form from "./form/Form";
import "./logIn.css";
const LogIn = () => {
  return (
    <section id="logIn-section">
      <div className="logIn-form-wrapper">
        <h4>Sign In</h4>
        <Form />
      </div>
    </section>
  );
};

export default LogIn;
