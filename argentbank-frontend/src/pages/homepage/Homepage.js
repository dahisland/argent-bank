import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <MainNav
        pathNavlink1="/login"
        txtNavlink1="Sign In"
        pathNavlink2="/signup"
        iconNavlink2={faUserPlus}
        txtNavlink2="Sign Up"
      />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
