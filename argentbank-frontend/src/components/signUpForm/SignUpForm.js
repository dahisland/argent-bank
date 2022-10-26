import React, { useState } from "react";
import BtnSignUp from "../btnSignUp/BtnSignUp";
import { signUpInputData } from "../../data/staticData";

const SignUpForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <form>
      {signUpInputData.map((item) => (
        <div className="input-wrapper" key={"signup" + item.id}>
          <label htmlFor={item.id}>{item.label}</label>
          <input
            type={item.type}
            id={item.id}
            name={item.id}
            autoComplete={item.id}
          />
        </div>
      ))}

      <div className="input-message">
        <p>{submitSuccess ? "Successful subscription" : ""}</p>
      </div>

      <BtnSignUp
        submitSuccess={submitSuccess}
        setSubmitSuccess={setSubmitSuccess}
      />
    </form>
  );
};

export default SignUpForm;
