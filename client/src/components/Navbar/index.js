import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      role="navigation"
    >

      <a className="navbar-brand" href="/">
        GBooks Finder
      </a>
      <li className="nav-item">
        <Link to="/search"
          className={
            window.location.pathname === "/search"
              ? "nav-link active"
              : "nav-link"
          }>
          Search Page
            </Link>
      </li>

      <li className="nav-item">
        <Link to="/saved"
          className={
            window.location.pathname === "/saved"
              ? "nav-link active"
              : "nav-link"
          }>
          Saved Books
            </Link>
      </li>
    </nav>
  );
}

export default Navbar;
