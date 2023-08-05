import React from "react";
import companyLogo from "../../assets/images/company-logo.jpg";
const MainNavbar = () => {
  return (
    <section className="main-navbar">
      <div className="navbar-company-logo company-logo-container">
        <img src={companyLogo} alt="company-logo" />
      </div>
      <ul className="main-navbar-links">
        <li className="nav-link">About</li>
        <li className="nav-link">Services</li>
        <li className="nav-link">Products</li>
        <li className="nav-link">Contact</li>
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
