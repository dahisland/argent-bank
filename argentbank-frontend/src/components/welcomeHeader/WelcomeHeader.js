import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileStatus } from "../../app/reduxSlices/profileSlice";
import EditProfileForm from "../editProfileForm/EditProfileForm";

const WelcomeHeader = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);

  function editProfile(e) {
    e.preventDefault();
    dispatch(editProfileStatus(true));
  }

  return (
    <div className={profileData.isEdited ? "header--edit" : "header"}>
      <h1>Welcome back</h1>
      {profileData.isEdited ? (
        <EditProfileForm />
      ) : (
        <div>
          <p className="profile-username">
            {profileData.firstName + " " + profileData.lastName}!
          </p>
          <button className="edit-button" onClick={editProfile}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomeHeader;
