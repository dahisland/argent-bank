import React from "react";
import { heroData } from "../../data/staticData";

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{heroData.title}</h2>
        {heroData.subtitles.map((el, index) => (
          <p className="subtitle" key={"subtitle" + index}>
            {el}
          </p>
        ))}
        <p className="text">{heroData.text}</p>
      </section>
    </div>
  );
};

export default Hero;
