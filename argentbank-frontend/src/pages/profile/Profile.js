import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import WelcomeHeader from "../../components/welcomeHeader/WelcomeHeader";
import Accounts from "../../components/accounts/Accounts";

const Profile = () => {
  return (
    <div className="current-page">
      <MainNav
        pathNavlink1="/profile"
        txtNavlink1={"Tony"}
        pathNavlink2="/"
        iconNavlink2={faSignOutAlt}
        txtNavlink2="Sign Out"
      />
      <main className="main bg-dark">
        <WelcomeHeader />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
