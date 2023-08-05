import React from "react";
import colorCircleIcon from "../../assets/images/color-circle-icon.svg";
import googleIcon from "../../assets/images/google-icon.svg";
import mtnIcon from "../../assets/images/mtn-icon.svg";
import vodafoneIcon from "../../assets/images/vodafone-icon.svg";
import paypalIcon from "../../assets/images/paypal-icon.svg";

const SubFooter = () => {
  return (
    <div className="sub-footer">
      <div className="footer-partners-container">
        <p>our partners:</p>
        <ul className="partners-container">
          <li className="partner-item">
            <img src={colorCircleIcon} alt="partner-logo" />
          </li>
          <li className="partner-item">
            <img src={googleIcon} alt="partner-logo" />
          </li>
        </ul>
      </div>
      <div className="footer-payment-options">
        <p>payment options:</p>
        <ul className="payment-options-container">
          <li className="payment-option">
            <img src={mtnIcon} alt="mtn-icon" />
          </li>
          <li className="payment-option vodafone-icon-container">
            <img src={vodafoneIcon} alt="vodafone-icon" />
          </li>
          <li className="payment-option paypal-icon-container">
            <img src={paypalIcon} alt="paypal-icon" />
          </li>
        </ul>
      </div>
      <div className="footer-copyright-container">
        <p className="copyright-text">
          <span>&copy;</span>copyright 2023
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
