import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  return (
    <div>
      <MainNav
        pathNavlink1="/user"
        txtNavlink1={"Tony"}
        pathNavlink2="/"
        iconNavlink2={faSignOutAlt}
        txtNavlink2="Sign Out"
      />
    </div>
  );
};

export default User;
