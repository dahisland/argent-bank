import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";

const NavLogo = () => {
  return (
    <NavLink className="main-nav-logo" to="/" end>
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
  );
};

export default NavLogo;
