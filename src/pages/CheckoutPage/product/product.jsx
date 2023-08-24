import React from "react";
import "./product.css";
import demo from "../../../assets/images/banner.jpg";
const Product = () => {
  return (
    <div className="checkout-product">
      <img src={demo} alt="" />
      <div className="checkout-product-details">
        <p className="checkout-product-name">
          Lorem ipsum dolor sit amet consectetur Lorem,
        </p>
        <p id="checkout-product-price-wrapper">
          <span>2</span> <span>*</span> <span>$188</span>
        </p>
      </div>
      <div id="checkout-product-total">
        <span>$1000.99</span>
      </div>
    </div>
  );
};

export default Product;
