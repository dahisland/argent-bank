import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInInputData } from "../../data/staticData";
import { loginPostRequest } from "../../service/apiRequests";
import {
  signinInputOnChange,
  signinCheckboxOnChange,
} from "./signinInputOnChange";

const SignInForm = () => {
  let [inputUsernameValue, setInputUsernameValue] = useState("");
  let [inputPasswordValue, setInputPasswordValue] = useState("");
  let [inputCheckboxValue, setInputCheckboxValue] = useState(false);

  let [submitMessage, setSubmitMessage] = useState("");
  let [loginSuccess, setLoginSuccess] = useState(false);

  let navigate = useNavigate();

  async function submitForm(e) {
    e.preventDefault();
    // Watch if "remember me" is checked
    console.log(inputCheckboxValue);
    // Call api post request
    let apiRes = await loginPostRequest(inputUsernameValue, inputPasswordValue);
    // if request status is 200 or 400, some data will be received from the api
    if (apiRes.status) {
      // Request status 200 : post request success.
      if (apiRes.status === 200) {
        setLoginSuccess(true);
        setTimeout(() => {
          navigate("/profile");
        }, 500);
      } else {
        // Request status 400 : post request failed because of wrong user username or password.
        setLoginSuccess(false);
      }
    }
    // If request fails with a 400 status, submit message will be the message received from data api
    // If request fails with an other status, submit message will be the catch error.message
    setSubmitMessage(apiRes.message);
  }

  return (
    <form>
      {signInInputData.map((item) => (
        <div className="input-wrapper" key={"login" + item.id}>
          <label htmlFor={item.id}>{item.label}</label>
          <input
            type={item.type}
            id={item.id}
            name={item.id}
            autoComplete={item.id}
            onChange={(e) =>
              signinInputOnChange(
                e,
                item.id,
                setInputUsernameValue,
                setInputPasswordValue
              )
            }
          />
        </div>
      ))}

      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          onChange={(e) => signinCheckboxOnChange(e, setInputCheckboxValue)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <div className={loginSuccess ? "input-message" : "input-message--error"}>
        <p>{submitMessage}</p>
      </div>

      <button className="sign-in-button" onClick={submitForm}>
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
