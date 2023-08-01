import React from "react";

const MainNavbar = () => {
  return (
    <section className="main-navbar">
      <div className="navbar-company-logo">store logo here</div>
      <ul className="main-navbar-links">
        <li className="nav-link">About</li>
        <li className="nav-link">Services</li>
        <li className="nav-link">Products</li>
        <li className="nav-link">Contact</li>
      </ul>
      <div className="user-profile">
        <div className="profile-image-container">
          <img src="" alt="user-imgage" />
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
