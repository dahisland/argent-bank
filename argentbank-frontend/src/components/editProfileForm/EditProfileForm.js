import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfileStatus,
  updateProfileData,
} from "../../app/reduxSlices/profileSlice";

import { profilePutRequest } from "../../service/apiRequests";

const EditProfileForm = () => {
  const loginData = useSelector((state) => state.login);
  const profileData = useSelector((state) => state.profile);
  const [msgEditSuccess, setMsgEditSuccess] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const inputProfileData = [
    { id: "userFirstname", value: profileData.firstName },
    { id: "userLastname", value: profileData.lastName },
  ];

  async function submitUpdateProfileForm(data) {
    if (
      data.userFirstname !== profileData.firstName ||
      data.userLastname !== profileData.lastName
    ) {
      let apiRes = await profilePutRequest(loginData.token, data);
      setMsgEditSuccess(apiRes.message);
      dispatch(updateProfileData(data.userFirstname, data.userLastname));
    } else {
      setMsgEditSuccess("User profile data are already updated");
    }
  }

  function cancelEditProfile(e) {
    e.preventDefault();
    dispatch(editProfileStatus(false));
  }

  return (
    <form
      className="form-editProfile"
      onSubmit={handleSubmit(submitUpdateProfileForm)}
    >
      <div>
        {inputProfileData.map((item) => (
          <input
            key={"input-profile-" + item.id}
            type="text"
            id={item.id}
            name={item.id}
            defaultValue={item.value}
            {...register(item.id)}
          />
        ))}
      </div>
      <p className="edit-messageSuccess">{msgEditSuccess}</p>
      <div>
        <button>Save</button>
        <button onClick={cancelEditProfile}>Cancel</button>
      </div>
    </form>
  );
};

export default EditProfileForm;
