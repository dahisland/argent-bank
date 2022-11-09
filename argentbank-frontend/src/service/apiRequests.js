import axios from "axios";
import { modelLoginData } from "../data/modelLoginData";
import { modelProfileData } from "../data/modelProfileData";
import { modelSignupData } from "../data/modelSignupData";

const baseApiURL = "http://localhost:3001/api/v1";

const loginEndpoint = "/user/login";
const signupEndpoint = "/user/signup";
const profileEndpoint = "/user/profile";

// LOGIN POST API REQUEST

export const loginPostRequest = (submitdata) => {
  return axios
    .post(baseApiURL + loginEndpoint, {
      email: submitdata.username,
      password: submitdata.password,
    })
    .then(function (res) {
      const loginData = new modelLoginData(res.data, submitdata.rememberMe);
      return loginData.formatLoginData();
    })
    .catch(function (err) {
      if (err.response && err.response.data.status === 400) {
        return err.response.data;
      } else {
        console.log(err.message);
        return err;
      }
    });
};

// SIGNUP POST API REQUEST

export const signupPostRequest = (submitdata) => {
  return axios
    .post(baseApiURL + signupEndpoint, {
      email: submitdata.usermail,
      password: submitdata.userpassword,
      firstName: submitdata.firstname,
      lastName: submitdata.lastname,
    })
    .then(function (res) {
      const signupData = new modelSignupData(res.data);
      return signupData.formatSignupData();
    })
    .catch(function (err) {
      if (err.response && err.response.data.status === 400) {
        return err.response.data;
      } else {
        console.log(err.message);
        return err;
      }
    });
};

// PROFILE POST API REQUEST

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
      if (err.response && err.response.data.status === 401) {
        return err.response.data;
      } else {
        console.log(err.message);
        return err;
      }
    });
};

// PROFILE PUT API REQUEST

export const profilePutRequest = (token, submitData) => {
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
      return updatedProfileData.formatProfileData();
    })
    .catch(function (err) {
      if (err.response && err.response.data.status === 401) {
        return err.response.data;
      } else {
        console.log(err.message);
        return err;
      }
    });
};
