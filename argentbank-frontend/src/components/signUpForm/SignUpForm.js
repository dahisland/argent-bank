import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { signUpInputData } from "../../data/staticData";
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetSignupData,
  actionGetSignupMockData,
} from "../../app/actions/getSignupData.action";
import { actionResetSignupStore } from "../../app/actions/resetSignupStore.action";
import { ServerContext } from "../../AppProvider";

/**
 * Component React displaying form to signup
 * @component
 */
const SignUpForm = () => {
  const serverIsOn = useContext(ServerContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupMessage, signupStatus } = useSelector((state) => state.signup);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Function on form submit to action register new user (signup)
   * @param {object} data - Data collected from useForm()
   * @async
   */
  async function submitSignupForm(data) {
    serverIsOn
      ? actionGetSignupData(data, dispatch)
      : actionGetSignupMockData(data, dispatch);
  }

  /**
   * Function to navigate to the login page when a new user has successfully been registered
   */
  function navToSignInPage(e) {
    e.preventDefault();
    actionResetSignupStore(dispatch);
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
            autoComplete="off"
          />
          <p className="input-error-message">
            <ErrorMessage errors={errors} name={item.id} />
          </p>
        </div>
      ))}

      <p
        className={
          signupStatus !== 200 ? "submit-message--error" : "submit-message"
        }
      >
        {signupMessage}
      </p>

      {signupStatus !== 200 ? (
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
