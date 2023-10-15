import React from "react";
import { useSelector } from "react-redux";
import Product from "../product/product";
import "./cart.css";

const Cart = () => {
  const { cartProducts, cartTotalAmount } = useSelector((state) => state.store);
  return (
    <>
      <div className="cart-headings row">
        <p className="product-heading col-4">product</p>
        <p className="quantity-heading col-3"> quantity</p>
        <p className="total-heading col-3">total</p>
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
                  totalAmount: price.$numberDecimal * amount,
                  id: _id,
                }}
                key={_id}
              />
            );
          })
        )}
        <div className="cart-total-container">
          <p className="total-heading">total:</p>
          <p className="cart-total-price">GHC {cartTotalAmount.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
