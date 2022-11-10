import axios from "axios";
import { modelProfileData } from "../../data/modelProfileData";
import {
  getProfileData,
  errorRequestProfileData,
} from "../reduxSlices/profileSlice";
import { baseApiURL, profileEndpoint } from "../../service/apiURL";

export const profilePostRequest = async (token, dispatch) => {
  try {
    let response = await axios.post(
      baseApiURL + profileEndpoint,
      {},
      {
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    );
    const profileData = new modelProfileData(response.data);
    const profileDataFormatted = profileData.formatProfileData();
    dispatch(getProfileData(profileDataFormatted));
    return profileDataFormatted;
  } catch (err) {
    if (err.response && err.response.data.status === 401) {
      const errorData = err.response.data;
      dispatch(
        errorRequestProfileData({
          message: errorData.message,
          status: errorData.status,
        })
      );
      return errorData;
    } else {
      console.log(err);
      dispatch(
        errorRequestProfileData({ message: err.message, apiError: true })
      );
      return err;
    }
  }
};
