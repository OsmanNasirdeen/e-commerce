import React from "react";
import "./Input.css";
const Input = ({ details }) => {
  return (
    <>
      <input
        type={details.type}
        id={details.id}
        name={details.name}
        className={details.className}
        placeholder={details.placeholder}
        style={{ width: details.width }}
        onChange={details.controls?.handleChange}
      />
    </>
  );
};

export default Input;
