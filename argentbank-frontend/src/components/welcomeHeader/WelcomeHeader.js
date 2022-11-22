import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionOnEditProfile } from "../../app/actions/editProfileStatus.action";
import EditProfileForm from "../editProfileForm/EditProfileForm";
import { actionUpdateProfileMessage } from "../../app/actions/updateProfileMessage.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const WelcomeHeader = () => {
  const dispatch = useDispatch();
  const { profileData, profileIsEdited, profileStatus, profileMessage } =
    useSelector((state) => state.profile);

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
      ) : profileStatus !== 200 ? (
        <div className="submit-message--error">
          <p>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            {" " + profileMessage}
          </p>
        </div>
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
