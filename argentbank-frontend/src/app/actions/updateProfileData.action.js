import axios from "axios";
import { modelProfileData } from "../../data/modelProfileData";
import {
  updateProfileData,
  rejectedProfileData,
} from "../reducers/profile.slice";
import { baseApiURL, profileEndpoint } from "../../service/apiURL";

/**
 * Redux action calling a put api request to update profile data
 * @param {string} token - Token for api authorization
 * @param {object} submitData - Contains new user data for api request
 * @param {func} dispatch - Hook to update redux store
 * @returns {object} - Object containing api response profile data or error data
 */
export const actionUpdateProfileData = (token, submitData, dispatch) => {
  return axios
    .put(
      baseApiURL + profileEndpoint,
      {
        firstName: submitData.userFirstname,
        lastName: submitData.userLastname,
      },
      {
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    )
    .then(function (res) {
      const updatedProfileData = new modelProfileData(res.data);
      const formattedUpdatedProfileData =
        updatedProfileData.formatProfileData();
      dispatch(updateProfileData(formattedUpdatedProfileData));
      return formattedUpdatedProfileData;
    })
    .catch(function (err) {
      if (err.response && err.response.data.status === 401) {
        const errorData = err.response.data;
        dispatch(
          rejectedProfileData({
            profileMessage: errorData.message,
            profileStatus: errorData.status,
          })
        );
        return errorData;
      } else {
        console.log(err);
        dispatch(
          rejectedProfileData({
            profileMessage: err.message,
            profileStatus: err.code,
          })
        );
        return err;
      }
    });
};
