import React from "react";
import { featuresData } from "../../data/staticData";

const HomepageFeatures = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((item, index) => (
        <div className="feature-item" key={"features" + index}>
          <img src={item.img} alt={item.alt} className="feature-icon" />
          <h3 className="feature-item-title">{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
};

export default HomepageFeatures;
