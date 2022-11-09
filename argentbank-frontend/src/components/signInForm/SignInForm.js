import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { signInInputData } from "../../data/staticData";
import { loginPostRequest } from "../../service/apiRequests";
import { setLoginData } from "../../app/reduxSlices/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const SignInForm = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginData = useSelector((state) => state.login);
  const loginSuccess = loginData.connected;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitLoginForm(data) {
    // Call api post request
    let loginData = await loginPostRequest(data);
    // if request status is 200 or 400, some data will be received from the api
    if (loginData.status && loginData.status === 200) {
      // Request status 200 : post request success.
      console.clear();
      console.log(loginData);
      // Set loginData in store
      dispatch(setLoginData(loginData));
      // Navigate to page profile
      setTimeout(() => {
        navigate("/profile");
      }, 500);
    }
    // If request fails with a 400 status, submit message will be the message received from data api
    // If request fails with an other status, submit message will be the catch error.message
    setSubmitMessage(loginData.message);
  }

  return (
    <form onSubmit={handleSubmit(submitLoginForm)}>
      {signInInputData.map((item) => (
        <div className="input-wrapper" key={"login" + item.id}>
          <label htmlFor={item.id}>{item.label}</label>
          <input
            type={item.type}
            id={item.id}
            name={item.id}
            autoComplete={item.id}
            {...register(item.id, { required: "This field is required" })}
          />
          <p className="input-error-message">
            <ErrorMessage errors={errors} name={item.id} />
          </p>
        </div>
      ))}

      <div className="input-remember">
        <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <p className={loginSuccess ? "submit-message" : "submit-message--error"}>
        {submitMessage}
      </p>

      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default SignInForm;
