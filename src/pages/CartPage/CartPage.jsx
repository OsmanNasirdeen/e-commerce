import React from "react";
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
            <button className="button-normal">continue shopping</button>
          </div>
          <div className="checkout-btn-container">
            <button className="button-normal">proceed to checkout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
