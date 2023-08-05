import React from "react";
import dealsIcon from "../../assets/images/deals-icon.png";
import shoppingCart from "../../assets/images/shoppingcart.svg";
import qualityIcon from "../../assets/images/quality-icon.png";
import securityIcon from "../../assets/images/secure-icon.svg";
const OurOffers = () => {
  return (
    <section className="offers-section">
      <div className="offer">
        <div className="offer-heading-container">
          <div className="offer-img-container offers-cart-icon">
            <img src={shoppingCart} alt="" />
          </div>
          <h3 className="offer-heading offers-delivery">free delivery</h3>
        </div>
        <p className="offer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officia
          iusto delectus distinctio qui.
        </p>
      </div>
      <div className="offer">
        <div className="offer-heading-container">
          <div className="offer-img-container">
            <img src={qualityIcon} alt="" />
          </div>
          <h3 className="offer-heading">free delivery</h3>
        </div>
        <p className="offer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officia
          iusto delectus distinctio qui.
        </p>
      </div>
      <div className="offer">
        <div className="offer-heading-container">
          <div className="offer-img-container">
            <img src={dealsIcon} alt="" />
          </div>
          <h3 className="offer-heading">free delivery</h3>
        </div>
        <p className="offer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officia
          iusto delectus distinctio qui.
        </p>
      </div>
      <div className="offer">
        <div className="offer-heading-container">
          <div className="offer-img-container">
            <img src={securityIcon} alt="" />
          </div>
          <h3 className="offer-heading">free delivery</h3>
        </div>
        <p className="offer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officia
          iusto delectus distinctio qui.
        </p>
      </div>
    </section>
  );
};

export default OurOffers;
