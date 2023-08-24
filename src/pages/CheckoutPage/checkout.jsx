import React from "react";
import Form from "./form/Form";
import Product from "./product/product";
import "./checkout.css";
const Checkout = () => {
  return (
    <main id="checkout-section">
      <article className="checkout-form-container">
        <Form />
      </article>
      <article className="checkout-cart">
        <h4>products ordered</h4>
        <div className="checkout-products-container">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div id="checkout-total-section">
          <article id="checkout-sub-total">
            <p>sub-total</p>
            <p>$ 123</p>
          </article>
          <article id="checkout-total">
            <p>total</p>
            <p>$ 123</p>
          </article>
        </div>
      </article>
    </main>
  );
};

export default Checkout;
