import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import WelcomeHeader from "../../components/welcomeHeader/WelcomeHeader";
import Accounts from "../../components/accounts/Accounts";

import { profilePostRequest } from "../../service/apiRequests";
import { setLoginData } from "../../app/reduxSlices/loginSlice";
import {
  setProfileData,
  editProfileStatus,
} from "../../app/reduxSlices/profileSlice";
import { initLoginData, initProfileData } from "../../app/initialStoreData";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.login);
  const profileData = useSelector((state) => state.profile);

  function resetStore() {
    console.clear();
    dispatch(setLoginData(initLoginData));
    dispatch(editProfileStatus(false));
    dispatch(setProfileData(initProfileData));
  }

  useEffect(() => {
    if (loginData.connected === true) {
      async function getProfileData() {
        console.clear();
        let apiRes = await profilePostRequest(loginData.token);
        console.log(apiRes);
        dispatch(setProfileData(apiRes));
      }
      getProfileData();
      //   console.clear();
    } else {
      resetStore();
      navigate("/");
    }
  });

  return (
    <div className="current-page">
      <MainNav
        pathNavlink1="/profile"
        txtNavlink1={profileData.firstName}
        pathNavlink2="/"
        iconNavlink2={faSignOutAlt}
        txtNavlink2="Sign Out"
        eventNavlink2={resetStore}
      />
      <main className={profileData.isEdited ? "main bg-grey" : "main bg-dark"}>
        <WelcomeHeader />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
