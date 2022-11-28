import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { actionResetStore } from "../../app/actions/resetStore.action";
import { useDispatch, useSelector } from "react-redux";

/**
 * Component React displaying clickable logo
 * @component
 */
const NavLogo = () => {
  const dispatch = useDispatch();
  const { connection } = useSelector((state) => state.login);
  return (
    <NavLink
      className="main-nav-logo"
      to="/"
      end
      onClick={
        connection !== "online" ? () => actionResetStore(dispatch) : null
      }
    >
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
  );
};

export default NavLogo;
