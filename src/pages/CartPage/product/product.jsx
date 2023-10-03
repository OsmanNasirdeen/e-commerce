import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../../features/products/ProductSlice";
// import prodImg from "../../../assets/images/banner.jpg";
import deleteIcon from "../../../assets/images/delete-icon.svg";
import "./product.css";
const Product = ({ details }) => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.store);
  // find product from the cart
  const product = cartProducts.find((item) => {
    return item._id === details.id;
  });

  return (
    <div className="cart-product row">
      <div className="cart-product-details-container col-4">
        <div className="cart-product-img-container">
          <img src={details.image} alt="" />
        </div>
        <div className="cart-product-details">
          <p className="cart-product-name">{details.title}</p>
          <p className="cart-product-price">
            GHC {details.price.$numberDecimal}
          </p>
        </div>
      </div>
      <div className="cart-product-quantity-container col-3 col-md-3">
        <p className="cart-product-quantity-control">
          <button
            className="cart-btn"
            onClick={() => {
              dispatch(decreaseQuantity(details.id));
            }}
            disabled={product.amount < 2 ? true : false}>
            -
          </button>
        </p>
        <p className="cart-product-quantity-number">{details.amount}</p>
        <p className="cart-product-quantity-control">
          <button
            className="cart-btn"
            onClick={() => {
              dispatch(increaseQuantity(details.id));
            }}>
            +
          </button>
        </p>
      </div>
      <div className="cart-product-total col-2 col-md-2">
        <p>
          GHC
          {details.totalAmount.toFixed(2)}
        </p>
      </div>
      <div
        className="cart-delete-product col-1 col-md-2"
        onClick={() => {
          dispatch(removeFromCart(details.id));
        }}>
        <img src={deleteIcon} alt="delete-icon" />
      </div>
    </div>
  );
};

export default Product;
