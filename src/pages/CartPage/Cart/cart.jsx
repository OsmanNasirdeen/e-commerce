import React from "react";
import { useSelector } from "react-redux";
import Product from "../product/product";
import "./cart.css";

const Cart = () => {
  const { cartProducts, cartTotalAmount } = useSelector((state) => state.store);
  return (
    <>
      <div className="cart-headings">
        <p className="product-heading">product</p>
        <p className="quantity-heading"> quantity</p>
        <p className="total-heading">total</p>
      </div>
      <div className="cart-products-container">
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
        <div className="cart-total-container">
          <p className="total-heading">total:</p>
          <p className="cart-total-price">GHC {cartTotalAmount}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
