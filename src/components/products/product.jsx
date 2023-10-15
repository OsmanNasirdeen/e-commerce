import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/products/ProductSlice";
import demoProd from "../../assets/images/banner.jpg";
import shoppingCart from "../../assets/images/shoppingcart.svg";
import "./product.css";
const Product = ({ details }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.store);
  // find product from the list
  const product = products.find((item) => {
    return item._id == details.id;
  });
  return (
    <div className="product product-card">
      <div className="product-card-top">
        <div className="card-img-container">
          <img src={details.image} alt="" />
        </div>
        <div className="card-btn-container">
          <button className="card-button">
            <span className="tooltip-text">Add to bag</span>
            <span
              className="card-cart-icon-container"
              onClick={() => {
                dispatch(addToCart(product));
              }}>
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
        <h4 className="product-name">
          <Link to={`/details/${details.title}`}>{details.title}</Link>
        </h4>
        <h6 className="product-category">{details.category}</h6>
        <h4 className="product-price">GHC {details.price.$numberDecimal}</h4>
      </div>
    </div>
  );
};

export default Product;
