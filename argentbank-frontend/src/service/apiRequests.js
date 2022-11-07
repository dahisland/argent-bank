import axios from "axios";
import { modelLoginData } from "../data/modelLoginData";
import { modelProfileData } from "../data/modelProfileData";
import { modelSignupData } from "../data/modelSignupData";

const baseApiURL = "http://localhost:3001/api/v1";

const loginEndpoint = "/user/login";
const signupEndpoint = "/user/signup";
const profileEndpoint = "/user/profile";

export const loginPostRequest = (
  userEmail,
  userPassword,
  inputCheckboxValue
) => {
  return axios
    .post(baseApiURL + loginEndpoint, {
      email: userEmail,
      password: userPassword,
    })
    .then(function (res) {
      const loginData = new modelLoginData(res.data, inputCheckboxValue);
      return loginData.formatLoginData();
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.data.status === 400) {
          return err.response.data;
        }
      } else {
        console.log(err.message);
        return err;
      }
    });
};

export const signupPostRequest = (
  userFirstname,
  userLastname,
  userEmail,
  userPassword
) => {
  return axios
    .post(baseApiURL + signupEndpoint, {
      email: userEmail,
      password: userPassword,
      firstName: userFirstname,
      lastName: userLastname,
    })
    .then(function (res) {
      const signupData = new modelSignupData(res.data);
      return signupData.formatSignupData();
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.data.status === 400) {
          return err.response.data;
        }
      } else {
        console.log(err.message);
        return err;
      }
    });
};

export const profilePostRequest = (token) => {
  return axios
    .post(
      baseApiURL + profileEndpoint,
      {},
      {
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    )
    .then(function (res) {
      const profileData = new modelProfileData(res.data);
      return profileData.formatProfileData();
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.data.status === 401) {
          return err.response.data;
        }
      } else {
        console.log(err.message);
        return err;
      }
    });
};

export const profilePutRequest = (token, newFirstname, newLastname) => {
  return axios
    .put(
      baseApiURL + profileEndpoint,
      { firstName: newFirstname, lastName: newLastname },
      {
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    )
    .then(function (res) {
      const updatedProfileData = new modelProfileData(res.data);
      return updatedProfileData.formatProfileData();
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.data.status === 401) {
          return err.response.data;
        }
      } else {
        console.log(err.message);
        return err;
      }
    });
};
