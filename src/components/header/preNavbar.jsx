import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import shoppingBag from "../../assets/images/my-bag.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/ProductSlice";

const PreNavbar = () => {
  const dispatch = useDispatch();
  const [formError, setFormError] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { cartLength } = useSelector((state) => state.store);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const validateForm = (form) => {
    const formErrs = {};
    if (!form || form.length < 3) {
      formErrs.msg =
        "product name is not provided or is less than 3 characters";
    } else if (form.length > 30) {
      formErrs.msg = "our products name cannot be greater than 30 characters";
    }
    return formErrs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(searchValue));
    setShouldSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0 && shouldSubmit) {
      dispatch(
        getProducts({
          url: `${import.meta.env.VITE_PRODUCTS_URL}/${searchValue}`,
        })
      );
    }
  }, [formError]);
  return (
    <section className="pre-navbar">
      <div className="form-error-msg">{formError.msg}</div>
      <form action="" className="navbar-search-form" onSubmit={handleSubmit}>
        <input
          placeholder="search our Shop"
          type="text"
          name="search-input"
          id="search-input"
          className="navbar-search-field"
          value={searchValue}
          onChange={handleChange}
          required
        />
        <button type="submit" className="navbar-search-icon">
          <img src={searchIcon} alt="" />
        </button>
      </form>
      <div className="shopping-bag">
        <Link to="/cart">
          <div className="shopping-bag-img-container">
            <img src={shoppingBag} alt="shopping-basket-image" />
          </div>
        </Link>
      </div>
      <div className="bag-items-count">{cartLength}</div>
    </section>
  );
};

export default PreNavbar;
