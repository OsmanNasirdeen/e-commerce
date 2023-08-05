import React from "react";
import companyLogo from "../../assets/images/company-logo.jpg";
const FooterCompanyDetails = () => {
  return (
    <div className="footer-company-details">
      <div className="company-info-container footer-company-about">
        <div className="company-logo-container footer-logo-container">
          <img src={companyLogo} alt="company-logo" />
        </div>
        <div className="footer-about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          voluptatem. Sint rerum aliquid dolorem fuga aliquam ullam enim qui eum
          soluta, sed reprehenderit perferendis praesentium repudiandae corrupti
          pariatur impedit aspernatur.
        </div>
        <ul className="footer-social-icons-container">
          <li className="social-icon brand-blue">
            <i className="bi bi-facebook "></i>
          </li>
          <li className="social-icon brand-red">
            <i className="bi bi-instagram"></i>
          </li>
          <li className="social-icon brand-blue">
            <i className="bi bi-twitter"></i>
          </li>
          <li className="social-icon brand-blue">
            <i className="bi bi-linkedin"></i>
          </li>
          <li className="social-icon brand-red">
            <i className="bi bi-youtube"></i>
          </li>
        </ul>
      </div>
      <div className="company-info-container footer-nav-links-container">
        <h3 className="footer-nav-links-header">Quicklinks</h3>
        <ul className="footer-nav-links">
          <li className="footer-nav-link-item">Home</li>
          <li className="footer-nav-link-item">About</li>
          <li className="footer-nav-link-item">services</li>
          <li className="footer-nav-link-item">products</li>
          <li className="footer-nav-link-item">contact</li>
        </ul>
      </div>
      <div className="company-info-container footer-help-links-container">
        <h3 className="footer-help-links-header">help & info help</h3>
        <ul className="footer-help-links">
          <li className="footer-help-link">track order</li>
          <li className="footer-help-link">return policies</li>
          <li className="footer-help-link">shipping and delivery</li>
          <li className="footer-help-link">contact us</li>
          <li className="footer-help-link">FAQs</li>
        </ul>
      </div>
      <div className="company-info-container footer-message-us-container">
        <h3 className="footer-message-us-header">have a message ?</h3>
        <div className="footer-message-us-body">
          <p className="footer-message-us-email">
            Do you have any questions or suggestions for us? ourMail@gmail.com
          </p>
          <p className="footer-message-us-telephone">
            If you need support? Just give us a call. +233 456 789 123
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterCompanyDetails;
