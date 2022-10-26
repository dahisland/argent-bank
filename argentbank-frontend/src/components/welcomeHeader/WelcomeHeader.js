import React from "react";
import BtnEdit from "../btnEdit/BtnEdit";

const WelcomeHeader = () => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <BtnEdit />
    </div>
  );
};

export default WelcomeHeader;
