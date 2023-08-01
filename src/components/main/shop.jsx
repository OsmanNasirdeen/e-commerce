import React from "react";
import Products from "./products/products";
const Shop = () => {
  return (
    <section className="shop-container">
      <Products />
      <div className="load-more-btn-container">
        <button>load More</button>
      </div>
    </section>
  );
};

export default Shop;
