import React from "react";
import MainNavbar from "./mainNavbar";
import PreNavbar from "./preNavbar";
import "./navbar.css";
const Navbar = () => {
  return (
    <header className="header-section">
      <PreNavbar />
      <MainNavbar />
    </header>
  );
};

export default Navbar;
