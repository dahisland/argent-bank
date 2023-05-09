import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { actionOffEditProfile } from "../../app/actions/editProfileStatus.action";
import {
  actionUpdateProfileData,
  actionUpdateProfileMockData,
} from "../../app/actions/updateProfileData.action";
import { actionUpdateProfileMessage } from "../../app/actions/updateProfileMessage.action";
import { ServerContext } from "../../AppProvider";

/**
 * Component React displaying form to edit and update user's profile firstname and lastname
 * @component
 */
const EditProfileForm = () => {
  const serverIsOn = useContext(ServerContext);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const { loginData } = useSelector((state) => state.login);
  const { profileData, profileStatus, profileMessage } = useSelector(
    (state) => state.profile
  );

  /**
   * Data used for the input default values in the form "edit profile data"
   */
  const inputProfileData = [
    { id: "userFirstname", value: profileData.firstName },
    { id: "userLastname", value: profileData.lastName },
  ];

  /**
   * Function on form submit to action update profile data with data collected or action update submit message
   * if no data need to be updated
   * @param {object} data - Data collected from useForm()
   * @async
   */
  async function submitUpdateProfileForm(data) {
    if (
      data.userFirstname !== profileData.firstName ||
      data.userLastname !== profileData.lastName
    ) {
      serverIsOn
        ? actionUpdateProfileData(loginData.token, data, dispatch)
        : actionUpdateProfileMockData(profileData, data, dispatch);
    } else {
      actionUpdateProfileMessage(
        "User profile data is already updated",
        dispatch
      );
    }
  }

  /**
   * Function on click upon "cancel" button to action update status profile edition and action reset profile message
   */
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
          profileStatus === 200 || profileStatus === 201
            ? "edit-message--success"
            : "edit-message--fail"
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
