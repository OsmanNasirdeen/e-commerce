import React from "react";
import Product from "../product/product";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <div className="cart-headings">
        <p className="product-heading">product</p>
        <p className="quantity-heading"> quantity</p>
        <p className="total-heading">total</p>
      </div>
      <div className="cart-products-container">
        <Product />
        <Product />
        <div className="cart-total-container">
          <p className="total-heading">total:</p>
          <p className="cart-total-price">ghc 15000</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
