import React from "react";
import demo from "../../assets/images/banner.jpg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./DetailsPage.css";
const DetailsPage = () => {
  const { productName } = useParams();
  const { products } = useSelector((state) => state.store);
  // find product from the list
  const product = products.find((item) => {
    return item.title == productName;
  });
  const { title, image, price, _id, category, description } = product;

  return (
    <>
      <section id="product-details-section" className="ms-md-0">
        <article className="product-container d-flex flex-column flex-md-row">
          <div className="product-image-container flex-shrink-0">
            <img src={image} alt="" />
          </div>
          <div className="product-info-container flex-grow-1">
            <p className="category">
              <strong style={{ color: "#212121" }}>category:</strong> {category}
            </p>
            <h2 className="name">{title}</h2>
            <p className="price">GHC {price.$numberDecimal}</p>
            <p className="description">{description}</p>
            <div>
              <button className="btn-add-cart ">add to cart</button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetailsPage;
