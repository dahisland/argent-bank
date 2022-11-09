import axios from "axios";
import { modelLoginData } from "../data/modelLoginData";
import { modelProfileData } from "../data/modelProfileData";
import { modelSignupData } from "../data/modelSignupData";

const baseApiURL = "http://localhost:3001/api/v1";

const loginEndpoint = "/user/login";
const signupEndpoint = "/user/signup";
const profileEndpoint = "/user/profile";

// LOGIN POST API REQUEST

export const loginPostRequest = async (submitData, { rejectWithValue }) =>
  //
  {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await axios.post(
        baseApiURL + loginEndpoint,
        {
          email: submitData.username,
          password: submitData.password,
        },
        config
      );
      const loginData = new modelLoginData(
        response.data,
        submitData.rememberMe
      );
      return loginData.formatLoginData();
    } catch (err) {
      if (err.response && err.response.data.status === 400) {
        // return err.response.data;
        return rejectWithValue(err.response.data);
      } else {
        console.log(err.message);
        // return err;
        return rejectWithValue(err.message);
      }
    }
  };

// SIGNUP POST API REQUEST

export const signupPostRequest = async (data, { rejectWithValue }) => {
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
      // return err.response.data;
      return rejectWithValue(err.response.data);
    } else {
      console.log(err.message);
      // return err;
      return rejectWithValue(err.message);
    }
  }
};

// PROFILE POST API REQUEST

export const profilePostRequest = async (token, { rejectWithValue }) => {
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
    return profileData.formatProfileData();
  } catch (err) {
    if (err.response && err.response.data.status === 401) {
      // return err.response.data;
      return rejectWithValue(err.response.data);
    } else {
      console.log(err.message);
      // return err;
      return rejectWithValue(err.message);
    }
  }
};

// PROFILE PUT API REQUEST

export const profilePutRequest = async (
  token,
  submitData,
  { rejectWithValue }
) => {
  try {
    let response = await axios.put(
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
    );
    const updatedProfileData = new modelProfileData(response.data);
    return updatedProfileData.formatProfileData();
  } catch (err) {
    if (err.response && err.response.data.status === 401) {
      // return err.response.data;
      return rejectWithValue(err.response.data);
    } else {
      console.log(err.message);
      // return err;
      return rejectWithValue(err.message);
    }
  }
};
