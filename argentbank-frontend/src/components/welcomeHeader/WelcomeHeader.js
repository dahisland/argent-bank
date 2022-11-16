import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionOnEditProfile } from "../../app/actions/editProfileStatus.action";
import EditProfileForm from "../editProfileForm/EditProfileForm";
import { actionUpdateProfileMessage } from "../../app/actions/updateProfileMessage.action";

const WelcomeHeader = () => {
  const dispatch = useDispatch();
  const { profileData, profileIsEdited } = useSelector(
    (state) => state.profile
  );

  function editProfile(e) {
    e.preventDefault();
    actionOnEditProfile(dispatch);
    actionUpdateProfileMessage("", dispatch);
  }

  return (
    <div className={profileIsEdited ? "header--edit" : "header"}>
      <h1>Welcome back</h1>
      {profileIsEdited ? (
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
