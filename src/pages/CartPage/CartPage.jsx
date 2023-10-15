import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import HeroImg from "../../assets/images/my-bag.svg";
import Cart from "./Cart/cart";
import "./cartPage.css";
const CartPage = () => {
  return (
    <>
      <Hero
        heroText={{ text: "my bag" }}
        HeroImage={{ img: HeroImg, style: { display: "none" } }}
      />
      <section className="cart-section">
        <Cart />
        <div className="cart-checkout-actions">
          <div className="continue-btn-container">
            <Link to="/">
              <button className="button-normal">continue shopping</button>
            </Link>
          </div>
          <div className="checkout-btn-container">
            <Link to="/checkout">
              <button className="button-normal">proceed to checkout</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
