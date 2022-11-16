import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { actionOffEditProfile } from "../../app/actions/editProfileStatus.action";
import { actionUpdateProfileData } from "../../app/actions/updateProfileData.action";
import { actionUpdateProfileMessage } from "../../app/actions/updateProfileMessage.action";

const EditProfileForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const { loginData } = useSelector((state) => state.login);
  const { profileData, profileStatus, profileMessage } = useSelector(
    (state) => state.profile
  );

  const inputProfileData = [
    { id: "userFirstname", value: profileData.firstName },
    { id: "userLastname", value: profileData.lastName },
  ];

  async function submitUpdateProfileForm(data) {
    if (
      data.userFirstname !== profileData.firstName ||
      data.userLastname !== profileData.lastName
    ) {
      actionUpdateProfileData(loginData.token, data, dispatch);
    } else {
      actionUpdateProfileMessage(
        "User profile data is already updated",
        dispatch
      );
    }
  }

  function cancelEditProfile(e) {
    e.preventDefault();
    actionOffEditProfile(dispatch);
    actionUpdateProfileMessage("", dispatch);
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
      <p
        className={
          profileStatus === 200 ? "edit-message--success" : "edit-message--fail"
        }
      >
        {profileMessage}
      </p>
      <div>
        <button>Save</button>
        <button onClick={cancelEditProfile}>Cancel</button>
      </div>
    </form>
  );
};

export default EditProfileForm;
