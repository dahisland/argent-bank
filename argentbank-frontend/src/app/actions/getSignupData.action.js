import axios from "axios";
import { baseApiURL, signupEndpoint } from "../../service/apiURL";
import { modelSignupData } from "../../data/modelSignupData";
import { getSignupData, rejectedSignupData } from "../reducers/signup.slice";

export const actionGetSignupData = async (submitData, dispatch) => {
  try {
    let response = await axios.post(baseApiURL + signupEndpoint, {
      email: submitData.usermail,
      password: submitData.userpassword,
      firstName: submitData.firstname,
      lastName: submitData.lastname,
    });
    const signupData = new modelSignupData(response.data);
    const signupDataFormatted = signupData.formatSignupData();
    dispatch(getSignupData(signupDataFormatted));
    return signupDataFormatted;
  } catch (err) {
    if (err.response && err.response.data.status === 400) {
      const errorData = err.response.data;
      dispatch(
        rejectedSignupData({
          signupStatus: errorData.status,
          signupMessage: errorData.message,
        })
      );
      return errorData;
    } else {
      console.log(err);
      dispatch(
        rejectedSignupData({
          signupStatus: err.code,
          signupMessage: err.message,
        })
      );
      return err;
    }
  }
};
