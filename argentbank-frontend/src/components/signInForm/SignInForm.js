import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { signInInputData } from "../../data/staticData";
import { actionGetLoginData } from "../../app/actions/getLoginData.action";
import { useDispatch, useSelector } from "react-redux";

/**
 * Component React displaying form login
 * @component
 */
const SignInForm = () => {
  const { loginMessage, loginStatus } = useSelector((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Function on form submit to action login
   * @param {object} data - Data collected from useForm()
   * @async
   */
  async function submitLoginForm(data) {
    actionGetLoginData(data, dispatch, navigate);
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

      <p
        className={
          loginStatus !== 200 ? "submit-message--error" : "submit-message"
        }
      >
        {loginMessage}
      </p>

      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default SignInForm;
