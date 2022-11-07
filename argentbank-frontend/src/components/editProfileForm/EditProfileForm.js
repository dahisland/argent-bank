import React from "react";
import { useSelector } from "react-redux";

const EditProfileForm = ({
  setInputFirstnameValue,
  setInputLastnameValue,
  submitEditProfile,
  cancelEditProfile,
}) => {
  const profileData = useSelector((state) => state.profile);

  return (
    <form className="form-editProfile">
      <div>
        <input
          type="text"
          defaultValue={profileData.firstName}
          onChange={(e) => setInputFirstnameValue(e.target.value)}
        ></input>
        <input
          type="text"
          defaultValue={profileData.lastName}
          onChange={(e) => setInputLastnameValue(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={submitEditProfile}>Save</button>
        <button onClick={cancelEditProfile}>Cancel</button>
      </div>
    </form>
  );
};

export default EditProfileForm;
