import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import WelcomeHeader from "../../components/welcomeHeader/WelcomeHeader";
import Accounts from "../../components/accounts/Accounts";
import { profilePostRequest } from "../../app/reduxActions/getProfile.action";
import { userAccountsData } from "../../data/mockData";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData, connection } = useSelector((state) => state.login);
  const { isEdited } = useSelector((state) => state.profile);

  const accountData = userAccountsData.body.accountData;

  useEffect(() => {
    if (connection !== "offline") {
      profilePostRequest(loginData.token, dispatch);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="current-page">
      <MainNav />
      <main className={isEdited ? "main bg-grey" : "main bg-dark"}>
        <WelcomeHeader />
        <h2 className="sr-only">Accounts</h2>
        {accountData.map((item, index) => (
          <Accounts item={item} key={"accounts" + index} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
