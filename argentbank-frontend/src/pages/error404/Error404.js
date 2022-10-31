import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

const Error404 = () => {
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
        <div className="error404">
          <h1>ERROR 404</h1>
          <p>This page doesn't exist</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error404;
