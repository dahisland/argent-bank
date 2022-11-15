import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import Hero from "../../components/hero/Hero";
import HomepageFeatures from "../../components/homepageFeatures/HomepageFeatures";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <MainNav />
      <main>
        <Hero />
        <HomepageFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
