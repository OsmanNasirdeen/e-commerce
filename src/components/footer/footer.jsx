import React from "react";
import FooterCompanyDetails from "./footerCompanyDetails";
import SubFooter from "./subFooter";
import "./footer.css";
const Footer = () => {
  return (
    <section className="footer-section">
      <FooterCompanyDetails />
      <SubFooter />
    </section>
  );
};

export default Footer;
