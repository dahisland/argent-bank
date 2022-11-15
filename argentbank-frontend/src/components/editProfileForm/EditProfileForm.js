import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { profileOutEdit } from "../../app/reduxActions/editProfileStatus.action";
import { profilePutRequest } from "../../app/reduxActions/updateProfile.action";

const EditProfileForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const { loginData } = useSelector((state) => state.login);
  const { profileData, status, message } = useSelector(
    (state) => state.profile
  );
  const [messageInfoEdit, setMessageInfoEdit] = useState("");

  const inputProfileData = [
    { id: "userFirstname", value: profileData.firstName },
    { id: "userLastname", value: profileData.lastName },
  ];

  async function submitUpdateProfileForm(data) {
    if (
      data.userFirstname !== profileData.firstName ||
      data.userLastname !== profileData.lastName
    ) {
      if (status !== 200) {
        setMessageInfoEdit(message);
      } else {
        profilePutRequest(loginData.token, data, dispatch);
        setMessageInfoEdit(message);
      }
    } else {
      if (status !== 200) {
        setMessageInfoEdit(message);
      } else {
        setMessageInfoEdit("User profile data is already updated");
      }
    }
  }

  function cancelEditProfile(e) {
    e.preventDefault();
    profileOutEdit(dispatch);
    setMessageInfoEdit("");
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
          status === 200 ? "edit-message--success" : "edit-message--fail"
        }
      >
        {messageInfoEdit}
      </p>
      <div>
        <button>Save</button>
        <button onClick={cancelEditProfile}>Cancel</button>
      </div>
    </form>
  );
};

export default EditProfileForm;
