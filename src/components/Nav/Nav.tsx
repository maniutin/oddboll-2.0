import React from "react";
import { NavLink } from "react-router-dom";
import Test from "../../Test";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <NavLink to="/">
            <img
              src="oddboll-logo.png"
              alt="oddboll logo"
              className="nav-logo"
            />
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
      </nav>
    </div>
  );
};

export default Nav;
