import React from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import shoppingBag from "../../assets/images/my-bag.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PreNavbar = () => {
  const { cartLength } = useSelector((state) => state.store);

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
        <Link to="/cart">
          <div className="shopping-bag-img-container">
            <img src={shoppingBag} alt="shopping-basket" />
          </div>
          <div className="bag-items-count">{cartLength}</div>
        </Link>
      </div>
    </section>
  );
};

export default PreNavbar;
