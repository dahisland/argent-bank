import axios from "axios";
import { modelProfileData } from "../../data/modelProfileData";
import { userData } from "../../data/mockData";
import { actionLoginOnline } from "./connectionStatus.action";
import { getProfileData, rejectedProfileData } from "../reducers/profile.slice";
import { baseApiURL, profileEndpoint } from "../../service/apiURL";

/**
 * Redux action calling a post api request to get profile data
 * @param {string} token - Token for api authorization
 * @param {func} dispatch - Hook to update redux store
 * @async
 * @returns {object} - Object containing profile data or error data
 */
export const actionGetProfileData = async (token, dispatch) => {
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
    actionLoginOnline(dispatch);
    return profileDataFormatted;
  } catch (err) {
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
  }
};

export const actionGetProfileMockData = (token, dispatch) => {
  const user = userData.find((el) => el.token === token);
  if (user !== undefined) {
    const response = {
      status: 200,
      message: "Successfully got user profile data",
      body: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        id: user._id,
      },
    };
    const profileData = new modelProfileData(response);
    const profileDataFormatted = profileData.formatProfileData();
    dispatch(getProfileData(profileDataFormatted));
    actionLoginOnline(dispatch);
    return profileDataFormatted;
  } else {
    const errorData = {
      status: 401,
      message: "Invalid token",
    };
    dispatch(
      rejectedProfileData({
        profileMessage: errorData.message,
        profileStatus: errorData.status,
      })
    );
  }
};
