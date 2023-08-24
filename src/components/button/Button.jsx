import React from "react";
import "./Button.css";
const Button = ({ details }) => {
  return (
    <button type={details.type} className={`${details.className}`}>
      {details.text}
    </button>
  );
};

export default Button;
