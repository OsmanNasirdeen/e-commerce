import React from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import shoppingBag from "../../assets/images/my-bag.svg";
const PreNavbar = () => {
  return (
    <section className="pre-navbar">
      <form action="" className="navbar-search-form">
        <input
          placeholder="search our Shop"
          type="text"
          name="search-input"
          id="search-input"
          className="navbar-search-field"
          required
        />
        <button type="submit" className="navbar-search-icon">
          <img src={searchIcon} alt="" />
        </button>
      </form>
      <div className="shopping-bag">
        <div className="shopping-bag-img-container">
          <img src={shoppingBag} alt="shopping-basket" />
        </div>
        <div className="bag-items-count">0</div>
      </div>
    </section>
  );
};

export default PreNavbar;
