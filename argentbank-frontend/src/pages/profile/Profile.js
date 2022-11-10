import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import WelcomeHeader from "../../components/welcomeHeader/WelcomeHeader";
import Accounts from "../../components/accounts/Accounts";
import { resetStore } from "../../app/reduxActions/logoutAction";
import { profilePostRequest } from "../../app/reduxActions/getProfileAction";
import { loginConnected } from "../../app/reduxActions/loginConnexion";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData, connexion } = useSelector((state) => state.login);
  const { profileData, isEdited } = useSelector((state) => state.profile);

  useEffect(() => {
    if (connexion === "on load" || connexion === "connected") {
      profilePostRequest(loginData.token, dispatch);
      loginConnected(dispatch);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="current-page">
      <MainNav
        pathNavlink1="/profile"
        txtNavlink1={profileData.firstName}
        pathNavlink2="/"
        iconNavlink2={faSignOutAlt}
        txtNavlink2="Sign Out"
        eventNavlink2={() => resetStore(dispatch)}
      />
      <main className={isEdited ? "main bg-grey" : "main bg-dark"}>
        <WelcomeHeader />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
