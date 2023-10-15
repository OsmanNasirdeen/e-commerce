import React from "react";
import Navbar from "../../components/header/Navbar";
import Hero from "../../components/hero/Hero";
import Offers from "../../components/ourOffers/Offers";
import Products from "../../components/products/products";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";
import bannerImg from "../../assets/images/hero-headphone.svg";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero
        heroText={{ text: "our products are great" }}
        HeroImage={{ img: bannerImg, style: { display: "block" } }}
      />
      <Offers />
      <Products />
      <div className="load-more-btn-container">
        <button className="button-black">load More</button>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
