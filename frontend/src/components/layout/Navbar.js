import React from "react";
import { NavLink } from "react-router-dom";

import cartImg from "../../images/cart.svg";
import userImg from "../../images/user.svg";

function Navbar() {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
        armoire<span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <a className="nav-link" href="about.html">
                About us
              </a>
            </li>
            <li>
              <a className="nav-link" href="services.html">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="blog.html">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link" href="contact.html">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="/">
                <img src={userImg} alt="user icon" />
              </a>
            </li>
            <li>
              <NavLink className="nav-link" to="/cart">
                <img src={cartImg} alt="cart icon" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
