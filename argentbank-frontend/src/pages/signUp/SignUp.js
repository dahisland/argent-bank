import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  return (
    <div>
      <MainNav
        pathNavlink1="/signin"
        txtNavlink1="Sign In"
        pathNavlink2="/signup"
        iconNavlink2={faUserPlus}
        txtNavlink2="Sign Up"
      />
    </div>
  );
};

export default SignUp;
