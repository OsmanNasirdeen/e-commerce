import React from "react";
import HeroSection from "./heroSection";
import OurOffers from "./ourOffers";
import Shop from "./shop";
import "./mainContent.css";
import Newsletter from "./newsletter";
const MainContent = () => {
  return (
    <main>
      <HeroSection />
      <OurOffers />
      <Shop />
      <Newsletter />
    </main>
  );
};

export default MainContent;
