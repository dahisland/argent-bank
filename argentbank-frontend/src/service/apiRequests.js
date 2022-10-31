import axios from "axios";

const baseApiURL = "http://localhost:3001/api/v1";

const loginEndpoint = "/user/login";
const signupEndpoint = "/user/signup";
const profileEndpoint = "/user/profile";

export const loginPostRequest = (userEmail, userPassword) => {
  return axios
    .post(baseApiURL + loginEndpoint, {
      email: userEmail,
      password: userPassword,
    })
    .then(function (res) {
      console.log(res.data);
      return res.data;
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.data.status === 400) {
          console.log(err.response.data);
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
      console.log(res.data);
      return res.data;
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.data.status === 400) {
          console.log(err.response.data);
          return err.response.data;
        }
      } else {
        console.log(err.message);
        return err;
      }
    });
};
