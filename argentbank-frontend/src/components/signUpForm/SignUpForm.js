import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { signUpInputData } from "../../data/staticData";
import { signupPostRequest } from "../../service/apiRequests";

const SignUpForm = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submitSignupForm(data) {
    let apiRes = await signupPostRequest(data);
    if (apiRes.status) {
      apiRes.status === 200 ? setSignupSuccess(true) : setSignupSuccess(false);
    }
    setSubmitMessage(apiRes.message);
  }

  function navToSignInPage(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <form onSubmit={handleSubmit(submitSignupForm)}>
      {signUpInputData.map((item) => (
        <div className="input-wrapper" key={"signup" + item.id}>
          <label htmlFor={item.id}>{item.label}</label>
          <input
            type={item.type}
            id={item.id}
            name={item.id}
            {...register(item.id, { required: "This field is required" })}
            autoComplete={item.id}
          />
          <p className="input-error-message">
            <ErrorMessage errors={errors} name={item.id} />
          </p>
        </div>
      ))}

      <p className={signupSuccess ? "submit-message" : "submit-message--error"}>
        {submitMessage}
      </p>

      {signupSuccess === false ? (
        <button className="sign-up-button">Sign Up</button>
      ) : (
        <button className="sign-up-button" onClick={navToSignInPage}>
          Log to account
        </button>
      )}
    </form>
  );
};

export default SignUpForm;
