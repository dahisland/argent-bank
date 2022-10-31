import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpInputData } from "../../data/staticData";
import { signupPostRequest } from "../../service/apiRequests";
import { signupInputOnChange } from "./signupInputOnChange";
import { regexMail, regexText, regexPassword } from "./signupRegex";

const SignUpForm = () => {
  let [inputFirstnameValue, setInputFirstnameValue] = useState("");
  let [inputLastnameValue, setInputLastnameValue] = useState("");
  let [inputEmailValue, setInputEmailValue] = useState("");
  let [inputPasswordValue, setInputPasswordValue] = useState("");
  let [signupSuccess, setSignupSuccess] = useState(false);
  let [submitMessage, setSubmitMessage] = useState("");

  let navigate = useNavigate();

  async function submitForm(e) {
    e.preventDefault();
    if (
      inputFirstnameValue.match(regexText) &&
      inputLastnameValue.match(regexText) &&
      inputPasswordValue.match(regexPassword) &&
      inputEmailValue.match(regexMail)
    ) {
      let apiRes = await signupPostRequest(
        inputFirstnameValue,
        inputLastnameValue,
        inputEmailValue,
        inputPasswordValue
      );
      if (apiRes.status) {
        apiRes.status === 200
          ? setSignupSuccess(true)
          : setSignupSuccess(false);
      }
      setSubmitMessage(apiRes.message);
    } else {
      setSignupSuccess(false);
      setSubmitMessage("Some fields are invalid");
    }
  }

  function navToSignInPage(e) {
    e.preventDefault();
    navigate("/signin");
  }

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
            onChange={(e) =>
              signupInputOnChange(
                e,
                item.id,
                setInputFirstnameValue,
                setInputLastnameValue,
                setInputEmailValue,
                setInputPasswordValue
              )
            }
          />
        </div>
      ))}

      <div className={signupSuccess ? "input-message" : "input-message--error"}>
        <p>{submitMessage}</p>
      </div>

      <button
        className="sign-up-button"
        onClick={signupSuccess ? navToSignInPage : submitForm}
      >
        {signupSuccess ? "Log to account" : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
