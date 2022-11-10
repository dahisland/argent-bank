import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileOnEdit } from "../../app/reduxActions/editProfileStatusAction";
import EditProfileForm from "../editProfileForm/EditProfileForm";

const WelcomeHeader = () => {
  const dispatch = useDispatch();
  const { profileData, isEdited } = useSelector((state) => state.profile);

  function editProfile(e) {
    e.preventDefault();
    profileOnEdit(dispatch);
  }

  return (
    <div className={isEdited ? "header--edit" : "header"}>
      <h1>Welcome back</h1>
      {isEdited ? (
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
