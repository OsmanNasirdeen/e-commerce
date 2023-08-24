import React from "react";
import demo from "../../assets/images/banner.jpg";
import "./DetailsPage.css";
const DetailsPage = () => {
  return (
    <>
      <section id="product-details-section" className="ms-md-0">
        <article className="product-container d-flex flex-column flex-md-row">
          <div className="product-image-container flex-shrink-0">
            <img src={demo} alt="" />
          </div>
          <div className="product-info-container flex-grow-1">
            <p className="category">
              <strong style={{ color: "#212121" }}>category:</strong>{" "}
              accessories
            </p>
            <h2 className="name">name</h2>
            <p className="price">$ 199</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              totam fugit quo repellat explicabo eius atque vero tenetur in
              itaque, quis debitis nostrum recusandae mollitia perspiciatis
              minima dolore iusto molestiae. description
            </p>
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
