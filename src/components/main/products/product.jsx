import React from "react";
import demoProd from "../../../assets/images/banner.jpg";
import shoppingCart from "../../../assets/images/shoppingcart.svg";
const Product = () => {
  return (
    <div className="product product-card">
      <div className="product-card-top">
        <div className="card-img-container">
          <img src={demoProd} alt="" />
        </div>
        <div className="card-btn-container">
          <button className="card-button">
            <span className="tooltip-text">Add to bag</span>
            <span className="card-cart-icon-container">
              <img
                src={shoppingCart}
                alt="cart-icon"
                className="card-cart-icon"
              />
            </span>
          </button>
        </div>
      </div>
      <div className="product-card-body">
        <h4 className="product-name">Lorem, ipsum.</h4>
        <h6 className="product-category">lorem</h6>
        <h4 className="product-price">GHC10</h4>
      </div>
    </div>
  );
};

export default Product;
