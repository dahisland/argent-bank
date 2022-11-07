import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/argentBankLogo.png";

const MainNav = ({
  pathNavlink1,
  txtNavlink1,
  pathNavlink2,
  iconNavlink2,
  txtNavlink2,
  eventNavlink2,
}) => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="main-nav-items">
        <NavLink
          //   className="main-nav-item"
          className={(nav) =>
            nav.isActive
              ? "main-nav-item router-link-exact-active"
              : "main-nav-item router-link-exact-inactive"
          }
          to={pathNavlink1}
        >
          <FontAwesomeIcon icon={faUserCircle} /> {txtNavlink1}
        </NavLink>
        <NavLink
          className={(nav) =>
            nav.isActive
              ? "main-nav-item router-link-exact-active"
              : "main-nav-item router-link-exact-inactive"
          }
          end
          to={pathNavlink2}
          onClick={eventNavlink2}
        >
          <FontAwesomeIcon icon={iconNavlink2} /> {txtNavlink2}
        </NavLink>
      </div>
    </nav>
  );
};

export default MainNav;
