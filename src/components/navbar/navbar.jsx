import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./navbar.css";
import zbclogo from "../../assets/zbclogo.svg";
import zbcblack from "../../assets/zbcblack.svg";
import Contact from "../contact/Contact";

import { HiX } from "react-icons/hi";

import { BiMenuAltRight as Ham } from "react-icons/bi";

const Navbar = () => {
  let location = useLocation();
  const [toggle, setToggle] = useState(false);

  const [navbar, setNavbar] = useState(false);

  function clickHandler() {
    setToggle(true);
  }

  function navHandler() {
    setNavbar(false);
    setToggle(true);
  }

  return (
    <nav
      className={`app-navbar ${
        location.pathname === "/about" ? "about-us-navbar" : ""
      }`}
    >
      <div className="navbar-left">
        <img src={zbclogo} alt="zbc-white-logo" id="white-logo" />
        <img src={zbcblack} alt="zbc-black-logo" id="black-logo" />
        <h3 className="font-bold md:text-2xl">Zero Bugs Club</h3>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <NavLink
              end
              to="/"
              className={`${
                location.pathname === "/about" ? "about-us-navbar-links" : ""
              }`}
            >
              Home
              <div />
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/about"
              className={`${
                location.pathname === "/about" ? "about-us-navbar-links" : ""
              }`}
            >
              About
              <div />
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/mission"
              className={`${
                location.pathname === "/about" ? "about-us-navbar-links" : ""
              }`}
            >
              Mission
              <div />
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/events"
              className={`${
                location.pathname === "/about" ? "about-us-navbar-links" : ""
              }`}
            >
              Events
              <div />
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/magazine"
              className={`${
                location.pathname === "/about" ? "about-us-navbar-links" : ""
              }`}
            >
              Magazine
              <div />
            </NavLink>
          </li>
          <button
            className={`contact-us-btn ${
              location.pathname === "/about" ? "about-us-navbar-btn" : ""
            }`}
            onClick={clickHandler}
          >
            Contact Us
          </button>
        </ul>
        <div className={toggle ? "show-contact" : "hide-contact"}>
          <Contact toggle={setToggle} />
        </div>
      </div>

      <div className="hamburger-menu">
        <Ham className="text-4xl" onClick={() => setNavbar(true)} />
        <nav className={navbar ? "show-navbar" : "hide-navbar"}>
          <div className="navbar">
            <HiX
              style={{ cursor: "pointer" }}
              className="absolute right-5 top-3 mb-10 text-3xl"
              onClick={() => setNavbar(false)}
            />
            <div>
              <ul className="mt-20 ml-10 navbar-list">
                <li>
                  <NavLink
                    end
                    to="/"
                    className={`${
                      location.pathname === "/about"
                        ? "about-us-navbar-links-sm"
                        : ""
                    }`}
                  >
                    Home
                    <div />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    end
                    to="/about"
                    className={`${
                      location.pathname === "/about"
                        ? "about-us-navbar-links-sm"
                        : ""
                    }`}
                  >
                    About
                    <div />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    end
                    to="/mission"
                    className={`${
                      location.pathname === "/about"
                        ? "about-us-navbar-links-sm"
                        : ""
                    }`}
                  >
                    Mission
                    <div />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    end
                    to="/events"
                    className={`${
                      location.pathname === "/about"
                        ? "about-us-navbar-links-sm"
                        : ""
                    }`}
                  >
                    Events
                    <div />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    end
                    to="/magazine"
                    className={`${
                      location.pathname === "/about"
                        ? "about-us-navbar-links-sm"
                        : ""
                    }`}
                  >
                    Magazine
                    <div />
                  </NavLink>
                </li>
                <button className="contact-us-btn" onClick={navHandler}>
                  Contact Us
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
