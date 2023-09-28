import React from "react";
import { useSelector } from "react-redux";
import Form from "./form/Form";
import Product from "./product/product";
import "./checkout.css";
const Checkout = () => {
  const { cartProducts, cartTotalAmount } = useSelector((state) => state.store);

  return (
    <main id="checkout-section">
      <article className="checkout-form-container">
        <Form />
      </article>
      <article className="checkout-cart">
        <h4>products ordered</h4>
        <div className="checkout-products-container">
          {cartProducts.length == 0 ? (
            <h1>bag is empty</h1>
          ) : (
            cartProducts.map((product) => {
              const { title, price, image, _id, amount } = product;
              return (
                <Product
                  details={{
                    title: title,
                    image: image,
                    price: price,
                    amount: amount,
                    id: _id,
                  }}
                  key={_id}
                />
              );
            })
          )}
        </div>
        <div id="checkout-total-section">
          <article id="checkout-sub-total">
            <p>sub-total</p>
            <p>GHC {cartTotalAmount}</p>
          </article>
          <article id="checkout-total">
            <p>total</p>
            <p>GHC {cartTotalAmount}</p>
          </article>
        </div>
      </article>
    </main>
  );
};

export default Checkout;
