import React from "react";
import companyLogo from "../../assets/images/company-logo.jpg";
import { Link } from "react-router-dom";
const MainNavbar = () => {
  return (
    <section className="main-navbar">
      <Link to="/">
        <div className="navbar-company-logo company-logo-container">
          <img src={companyLogo} alt="company-logo" />
        </div>
      </Link>
      <ul className="main-navbar-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="user-profile">
        <div className="profile-image-container">
          <img src="" alt="user-image" />
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
