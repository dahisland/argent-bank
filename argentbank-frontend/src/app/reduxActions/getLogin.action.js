import axios from "axios";
import { modelLoginData } from "../../data/modelLoginData";
import { getLoginData, rejectedLoginData } from "../reduxSlices/loginSlice";
import { baseApiURL, loginEndpoint } from "../../service/apiURL";

export const loginPostRequest = async (submitData, dispatch, navigate) => {
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
      dispatch(rejectedLoginData(errorData));
      return errorData;
    } else {
      console.log(err);
      dispatch(
        rejectedLoginData({
          message: err.message,
          status: err.code,
          apiError: true,
        })
      );
      return err;
    }
  }
};
