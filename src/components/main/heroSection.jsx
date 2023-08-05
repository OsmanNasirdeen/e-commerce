import React from "react";
import headerImage from "../../assets/images/hero-headphone.svg";
const HeroSection = () => {
  return (
    <section className="header-section">
      <div className="header-text-container">
        <p>OUR PRODUCTS ARE GREAT</p>
      </div>
      <div className="header-img-container">
        <img src={headerImage} alt="image-of-a-phone" className="header-img" />
      </div>
    </section>
  );
};

export default HeroSection;
