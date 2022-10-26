import React from "react";
import { useNavigate } from "react-router-dom";

const BtnSignIn = () => {
  let navigate = useNavigate();
  function navToUserPage(e) {
    e.preventDefault();
    navigate("/user");
  }

  return (
    <button className="sign-in-button" onClick={navToUserPage}>
      Sign In
    </button>
  );
};

export default BtnSignIn;
