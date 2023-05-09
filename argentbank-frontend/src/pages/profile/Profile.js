import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import WelcomeHeader from "../../components/welcomeHeader/WelcomeHeader";
import Accounts from "../../components/accounts/Accounts";
import {
  actionGetProfileData,
  actionGetProfileMockData,
} from "../../app/actions/getProfileData.action";
import { actionGetAccountData } from "../../app/actions/getAccountData.action";
import { ServerContext } from "../../AppProvider";

/**
 * Component React displaying profile page
 * @component
 */
const Profile = () => {
  const serverIsOn = useContext(ServerContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData, connection } = useSelector((state) => state.login);
  const { profileIsEdited, profileData } = useSelector(
    (state) => state.profile
  );
  const { accountData } = useSelector((state) => state.account);

  useEffect(() => {
    if (connection !== "offline") {
      if (profileData.id === "") {
        serverIsOn
          ? actionGetProfileData(loginData.token, dispatch)
          : actionGetProfileMockData(loginData.token, dispatch);
      }
      actionGetAccountData(dispatch);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="current-page">
      <MainNav />
      <main className={profileIsEdited ? "main bg-grey" : "main bg-dark"}>
        <WelcomeHeader />
        <h2 className="sr-only">Accounts</h2>
        {accountData.map((item, index) => (
          <Accounts data={item} key={"accounts" + index} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
