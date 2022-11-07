import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfileData,
  updateProfileData,
} from "../../app/reduxSlices/profileSlice";
import { profilePutRequest } from "../../service/apiRequests";
import EditProfileForm from "../editProfileForm/EditProfileForm";

const WelcomeHeader = () => {
  const dispatch = useDispatch();
  const [msgEditSuccess, setMsgEditSuccess] = useState("");
  const loginData = useSelector((state) => state.login);
  const profileData = useSelector((state) => state.profile);

  const [inputFirstnameValue, setInputFirstnameValue] = useState("");
  const [inputLastnameValue, setInputLastnameValue] = useState("");

  async function putProfileData() {
    console.clear();
    let apiRes = await profilePutRequest(
      loginData.token,
      inputFirstnameValue,
      inputLastnameValue
    );
    setMsgEditSuccess(apiRes.message);
    dispatch(updateProfileData(inputFirstnameValue, inputLastnameValue));
  }

  function submitEditProfile(e) {
    e.preventDefault();
    if (
      inputFirstnameValue !== profileData.firstName ||
      inputLastnameValue !== profileData.lastName
    ) {
      putProfileData();
      setTimeout(() => {
        setMsgEditSuccess("");
      }, 2000);
    }
    dispatch(editProfileData(false));
  }

  function editProfile(e) {
    e.preventDefault();
    setInputFirstnameValue(profileData.firstName);
    setInputLastnameValue(profileData.lastName);
    dispatch(editProfileData(true));
  }

  function cancelEditProfile(e) {
    e.preventDefault();
    dispatch(editProfileData(false));
  }

  return (
    <div className={profileData.isEdited ? "header--edit" : "header"}>
      <h1>Welcome back</h1>
      {profileData.isEdited ? (
        <EditProfileForm
          setInputFirstnameValue={setInputFirstnameValue}
          setInputLastnameValue={setInputLastnameValue}
          submitEditProfile={submitEditProfile}
          cancelEditProfile={cancelEditProfile}
        />
      ) : (
        <div>
          <p className="profile-username">
            {profileData.firstName + " " + profileData.lastName}!
          </p>
          <p className="edit-messageSuccess">{msgEditSuccess}</p>
          <button className="edit-button" onClick={editProfile}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomeHeader;
