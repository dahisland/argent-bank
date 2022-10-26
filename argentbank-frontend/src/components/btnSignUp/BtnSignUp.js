import React from "react";
import { useNavigate } from "react-router-dom";

const BtnSignUp = ({ submitSuccess, setSubmitSuccess }) => {
  let navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    setSubmitSuccess(true);
  }

  function navToSignInPage(e) {
    e.preventDefault();
    navigate("/signin");
  }

  return (
    <button
      className="sign-up-button"
      onClick={submitSuccess ? navToSignInPage : submitForm}
    >
      {submitSuccess ? "Log to account" : "Sign Up"}
    </button>
  );
};

export default BtnSignUp;
