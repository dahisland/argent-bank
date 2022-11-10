import axios from "axios";
import { modelProfileData } from "../../data/modelProfileData";
import {
  updateProfileData,
  errorRequestProfileData,
} from "../reduxSlices/profileSlice";
import { baseApiURL, profileEndpoint } from "../../service/apiURL";

export const profilePutRequest = (token, submitData, dispatch) => {
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
        dispatch(errorRequestProfileData(errorData));
        return errorData;
      } else {
        console.log(err);
        dispatch(
          errorRequestProfileData({ message: err.message, apiError: true })
        );
        return err;
      }
    });
};
