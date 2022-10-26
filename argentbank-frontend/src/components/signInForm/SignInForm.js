import React from "react";
import BtnSignIn from "../btnSignIn/BtnSignIn";
import { signInInputData } from "../../data/staticData";

const SignInForm = () => {
  return (
    <form>
      {signInInputData.map((item) => (
        <div className="input-wrapper" key={"signin" + item.id}>
          <label htmlFor={item.id}>{item.label}</label>
          <input
            type={item.type}
            id={item.id}
            name={item.id}
            autoComplete={item.id}
          />
        </div>
      ))}

      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <BtnSignIn />
    </form>
  );
};

export default SignInForm;
