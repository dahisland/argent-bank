import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainNav from "../../components/mainNav/MainNav";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import Footer from "../../components/footer/Footer";

const SignUp = () => {
  return (
    <div className="current-page">
      <MainNav
        pathNavlink1="/signin"
        txtNavlink1="Sign In"
        pathNavlink2="/signup"
        iconNavlink2={faUserPlus}
        txtNavlink2="Sign Up"
      />
      <main className="main bg-dark">
        <section className="sign-up-content">
          <FontAwesomeIcon icon={faUserPlus} />
          <h1>Sign Up</h1>
          <SignUpForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
