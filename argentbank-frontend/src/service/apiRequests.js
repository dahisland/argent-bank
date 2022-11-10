import axios from "axios";
import { modelSignupData } from "../data/modelSignupData";
import { baseApiURL, signupEndpoint } from "./apiURL";

// SIGNUP POST API REQUEST
export const signupPostRequest = async (data) => {
  try {
    let response = await axios.post(baseApiURL + signupEndpoint, {
      email: data.usermail,
      password: data.userpassword,
      firstName: data.firstname,
      lastName: data.lastname,
    });
    const signupData = new modelSignupData(response.data);
    return signupData.formatSignupData();
  } catch (err) {
    if (err.response && err.response.data.status === 400) {
      return err.response.data;
    } else {
      console.log(err);
      return err;
    }
  }
};
