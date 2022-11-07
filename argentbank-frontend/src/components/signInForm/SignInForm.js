import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInInputData } from "../../data/staticData";
import { loginPostRequest } from "../../service/apiRequests";
import {
  signinInputOnChange,
  signinCheckboxOnChange,
} from "./signinInputOnChange";
import { setLoginData } from "../../app/reduxSlices/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const SignInForm = () => {
  let [inputUsernameValue, setInputUsernameValue] = useState("");
  let [inputPasswordValue, setInputPasswordValue] = useState("");
  let [inputCheckboxValue, setInputCheckboxValue] = useState(false);

  let [submitMessage, setSubmitMessage] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitForm(e) {
    e.preventDefault();
    // Call api post request
    let apiRes = await loginPostRequest(
      inputUsernameValue,
      inputPasswordValue,
      inputCheckboxValue
    );
    // if request status is 200 or 400, some data will be received from the api
    if (apiRes.status) {
      // Request status 200 : post request success.
      if (apiRes.status === 200) {
        console.clear();
        const loginData = apiRes;
        console.log(loginData);
        // Set loginData in store
        dispatch(setLoginData(loginData));
        // Navigate to page profile
        setTimeout(() => {
          navigate("/profile");
        }, 500);
      }
    }
    // If request fails with a 400 status, submit message will be the message received from data api
    // If request fails with an other status, submit message will be the catch error.message
    setSubmitMessage(apiRes.message);
  }

  const loginData = useSelector((state) => state.login);
  const loginSuccess = loginData.connected;

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
