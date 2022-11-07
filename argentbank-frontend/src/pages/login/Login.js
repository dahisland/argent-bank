import React, { useEffect } from "react";
import MainNav from "../../components/mainNav/MainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../../components/signInForm/SignInForm";
import Footer from "../../components/footer/Footer";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.login);
  const profileData = useSelector((state) => state.profile);
  const loginSuccess = loginData.connected;
  const profileStatus = profileData.status;

  useEffect(() => {
    if (loginSuccess === true && profileStatus !== null) {
      navigate("/");
    }
  });

  return (
    <div className="current-page">
      <MainNav
        pathNavlink1="/login"
        txtNavlink1="Sign In"
        pathNavlink2="/signup"
        iconNavlink2={faUserPlus}
        txtNavlink2="Sign Up"
      />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
