import React from "react";
import "./product.css";
import demo from "../../../assets/images/banner.jpg";
const Product = ({ details }) => {
  return (
    <div className="checkout-product">
      <img src={details.image} alt="" />
      <div className="checkout-product-details">
        <p className="checkout-product-name">{details.title}</p>
        <p id="checkout-product-price-wrapper">
          <span>GHC {`${details.price.$numberDecimal}  `}</span> <span>*</span>{" "}
          <span>{details.amount}</span>
        </p>
      </div>
      <div id="checkout-product-total">
        <span>GHC {`${details.amount * details.price.$numberDecimal}`}</span>
      </div>
    </div>
  );
};

export default Product;
