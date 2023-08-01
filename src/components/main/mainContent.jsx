import React from "react";
import HeroSection from "./heroSection";
import OurOffers from "./ourOffers";
import Shop from "./shop";
import "./mainContent.css";
const MainContent = () => {
  return (
    <main>
      <HeroSection />
      <OurOffers />
      <Shop />
    </main>
  );
};

export default MainContent;
