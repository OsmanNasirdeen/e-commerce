import React from "react";
import "./Select.css";
const Select = ({ details }) => {
  return (
    <select
      name={details.selectName}
      className={details.className}
      value={details.value}
      onChange={details.controls?.handleChange}>
      {details.options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
