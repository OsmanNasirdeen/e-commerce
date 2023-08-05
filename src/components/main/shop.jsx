import React from "react";
import Products from "./products/products";
const Shop = () => {
  return (
    <section className="shop-container">
      <Products />
      <div className="load-more-btn-container">
        <button className="button-black">load More</button>
      </div>
    </section>
  );
};

export default Shop;
