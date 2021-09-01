import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ title, isDarkMode, toggleMode }) => {
  return (
    <nav
      className={
        isDarkMode
          ? "navbar navbar-expand-lg navbar-dark bg-dark"
          : "navbar navbar-expand-lg navbar-light bg-light"
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div
            className={
              isDarkMode
                ? "form-check form-switch text-light"
                : "form-check form-switch text-dark"
            }
          >
            <input
              onClick={toggleMode}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
