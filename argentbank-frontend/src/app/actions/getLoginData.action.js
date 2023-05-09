import axios from "axios";
import { userData } from "../../data/mockData";
import { modelLoginData } from "../../data/modelLoginData";
import { getLoginData, rejectedLoginData } from "../reducers/login.slice";
import { baseApiURL, loginEndpoint } from "../../service/apiURL";

/**
 * Redux action calling a post api request to login
 * @param {object} submitData - Contains user email and password
 * @param {func} dispatch - Hook to update redux store
 * @param {func} navigate - Hook to navigate to profile page
 * @async
 * @returns {object} - Object containing token or error data
 */
export const actionGetLoginData = async (submitData, dispatch, navigate) => {
  try {
    let response = await axios.post(baseApiURL + loginEndpoint, {
      email: submitData.username,
      password: submitData.password,
    });
    const loginData = new modelLoginData(response.data, submitData.rememberMe);
    const loginDataFormatted = loginData.formatLoginData();
    dispatch(getLoginData(loginDataFormatted));
    navigate("/profile");
    return loginDataFormatted;
  } catch (err) {
    if (err.response && err.response.data.status === 400) {
      const errorData = err.response.data;
      console.log(err.response.data);
      dispatch(
        rejectedLoginData({
          loginStatus: errorData.status,
          loginMessage: errorData.message,
        })
      );
      return errorData;
    } else {
      console.log(err);
      dispatch(
        rejectedLoginData({
          loginMessage: err.message,
          loginStatus: err.code,
        })
      );
      return err;
    }
  }
};

export const actionGetLoginMockData = (submitData, dispatch, navigate) => {
  const user = userData.find((el) => el.email === submitData.username);
  if (user === undefined) {
    const errorData = { status: 400, message: "Error: User not found!" };
    dispatch(
      rejectedLoginData({
        loginStatus: errorData.status,
        loginMessage: errorData.message,
      })
    );
    return errorData;
  } else {
    if (user.password !== submitData.password) {
      const errorData = {
        status: 400,
        message: "Error: Password is invalid",
      };
      dispatch(
        rejectedLoginData({
          loginStatus: errorData.status,
          loginMessage: errorData.message,
        })
      );
      return errorData;
    } else {
      const response = {
        status: 200,
        message: "User successfully logged in",
        body: { token: user.token },
      };
      const loginData = new modelLoginData(response, submitData.rememberMe);
      const loginDataFormatted = loginData.formatLoginData();
      dispatch(getLoginData(loginDataFormatted));
      navigate("/profile");
      return loginDataFormatted;
    }
  }
};
