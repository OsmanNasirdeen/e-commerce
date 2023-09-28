import React from "react";
import Product from "./product";
import { useSelector } from "react-redux";

import "./products.css";
const Products = () => {
  const { products } = useSelector((state) => state.store);
  return (
    <section className="products-container">
      {products.map((product) => {
        const { title, image, price, _id, category } = product;
        return (
          <Product
            details={{
              title: title,
              image: image,
              price: price,
              id: _id,
              category,
            }}
            key={_id}
          />
        );
      })}
    </section>
  );
};

export default Products;
