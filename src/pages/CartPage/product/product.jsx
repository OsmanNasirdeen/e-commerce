import React from "react";
import prodImg from "../../../assets/images/banner.jpg";
import deleteIcon from "../../../assets/images/delete-icon.svg";
import "./product.css";
const Product = () => {
  return (
    <div className="cart-product">
      <div className="cart-product-details-container">
        <div className="cart-product-img-container">
          <img src={prodImg} alt="" />
        </div>
        <div className="cart-product-details">
          <p className="cart-product-name">name</p>
          <p className="cart-product-price">price</p>
        </div>
      </div>
      <div className="cart-product-quantity-container">
        <p className="cart-product-quantity-control">
          <button className="cart-btn">-</button>
        </p>
        <p className="cart-product-quantity-number">1</p>
        <p className="cart-product-quantity-control">
          <button className="cart-btn">+</button>
        </p>
      </div>
      <div className="cart-product-total">
        <p>GHC15000</p>
      </div>
      <div className="cart-delete-product">
        <img src={deleteIcon} alt="delete-icon" />
      </div>
    </div>
  );
};

export default Product;
