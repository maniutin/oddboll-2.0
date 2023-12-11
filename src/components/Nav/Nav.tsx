import "./Nav.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/oddboll-logo.png";
import IgLogo from "../../assets/social_logos/ig_logo.png";
import MixcloudLogo from "../../assets/social_logos/mixcloud_logo.svg";
import ScLogo from "../../assets/social_logos/sc_logo.png";

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">
          <img src={Logo} alt="oddboll logo" className="nav-logo" />
        </NavLink>
      </div>
      <div className="nav-list">
        <div className="nav-link">
          <NavLink
            to="/"
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
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "underline",
                  }
                : {}
            }
            to="/reviews"
          >
            Reviews
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "underline",
                  }
                : {}
            }
            to="/interviews"
          >
            Interviews
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "underline",
                  }
                : {}
            }
            to="/listen"
          >
            Listen
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "underline",
                  }
                : {}
            }
            to="/3-word-reviews"
          >
            3-Word Reviews
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "underline",
                  }
                : {}
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="nav-social-logos">
        <a
          href="https://www.instagram.com/odddboll/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-link"
        >
          <img src={IgLogo} alt="instagram logo" className="nav-social-icon" />
        </a>
        <a
          href="https://soundcloud.com/oddboll"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-link"
        >
          <img src={ScLogo} alt="soundcloud logo" className="nav-social-icon" />
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
    </nav>
  );
};

export default Nav;
