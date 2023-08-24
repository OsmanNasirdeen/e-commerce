import React from "react";
// import headerImage from "../../../assets/images/hero-headphone.svg";
import "./Hero.css";
const Hero = ({ heroText, HeroImage }) => {
  return (
    <section className="hero-section">
      <div className="hero-text-container">
        <p>{heroText.text}</p>
      </div>
      <div
        className="hero-img-container"
        style={{ display: HeroImage.style.display }}>
        <img
          src={HeroImage.img}
          alt="image-of-a-phone"
          className="header-img"
        />
      </div>
    </section>
  );
};

export default Hero;
