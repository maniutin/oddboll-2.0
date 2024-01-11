import "./Nav.scss";
import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Burger from "../../assets/burger.svg";
import Close from "../../assets/close.svg";
import Logo from "../../assets/oddboll-logo.png";
import IgLogo from "../../assets/social_logos/ig_logo.png";
import MixcloudLogo from "../../assets/social_logos/mixcloud_logo.svg";
import ScLogo from "../../assets/social_logos/sc_logo.png";

const Nav = () => {
  const [expandBurger, setExpandBurger] = useState<boolean>(false);

  const navMenu = useRef<HTMLDivElement>(null);

  const closeOpenMenus = (e: any) => {
    if (expandBurger && !navMenu.current?.contains(e.target)) {
      setExpandBurger(false);
    }
  };

  window.addEventListener("resize", function (event) {
    if (window.innerWidth > 1024) setExpandBurger(false);
  });

  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <nav className="navbar" ref={navMenu}>
      <div className="nav-logo-wrapper">
        <NavLink to="/" onClick={() => setExpandBurger(!expandBurger)}>
          <img src={Logo} alt="oddboll logo" className="nav-logo" />
        </NavLink>
      </div>
      <div className={`nav-menu${expandBurger ? " expand" : ""}`}>
        <div className="nav-pages">
          <div className="nav-link">
            <NavLink
              to="/"
              onClick={() => setExpandBurger(!expandBurger)}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Home
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              to="/reviews"
              onClick={() => setExpandBurger(!expandBurger)}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Reviews
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              to="/interviews"
              onClick={() => setExpandBurger(!expandBurger)}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Interviews
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              to="/listen"
              onClick={() => setExpandBurger(!expandBurger)}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Listen
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              to="/3-word-reviews"
              onClick={() => setExpandBurger(!expandBurger)}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              3-Word Reviews
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink
              to="/about"
              onClick={() => setExpandBurger(!expandBurger)}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              About
            </NavLink>
          </div>
        </div>
        <div className="nav-social-links">
          <a
            href="https://www.instagram.com/odddboll/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
          >
            <img
              src={IgLogo}
              alt="instagram logo"
              className="nav-social-icon"
            />
          </a>
          <a
            href="https://soundcloud.com/oddboll"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
          >
            <img
              src={ScLogo}
              alt="soundcloud logo"
              className="nav-social-icon"
            />
          </a>
          <a
            href="https://www.mixcloud.com/kettle_whistle/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-link"
          >
            <img
              src={MixcloudLogo}
              alt="mixcloud logo"
              className="nav-social-icon"
            />
          </a>
        </div>
      </div>
      <div className="hamburger" onClick={() => setExpandBurger(!expandBurger)}>
        <img src={expandBurger ? Close : Burger} alt="hamburger menu icon" />
      </div>
    </nav>
  );
};

export default Nav;
