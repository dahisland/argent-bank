import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import Hero from "../../components/hero/Hero";
import HomepageFeatures from "../../components/homepageFeatures/HomepageFeatures";
import { faUserPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setLoginData } from "../../app/reduxSlices/loginSlice";
import { setProfileData } from "../../app/reduxSlices/profileSlice";
import { initLoginData, initProfileData } from "../../app/initialStoreData";

const Homepage = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  const loginSuccess = loginData.connected;
  const profileData = useSelector((state) => state.profile);

  function resetStore() {
    console.clear();
    dispatch(setLoginData(initLoginData));
    dispatch(setProfileData(initProfileData));
  }

  return (
    <div>
      {loginSuccess === true ? (
        <MainNav
          pathNavlink1={"/profile"}
          txtNavlink1={profileData.firstName}
          pathNavlink2={"/"}
          iconNavlink2={faSignOutAlt}
          txtNavlink2={"Sign out"}
          eventNavlink2={resetStore}
        />
      ) : (
        <MainNav
          pathNavlink1={"/login"}
          txtNavlink1={"Sign In"}
          pathNavlink2={"/signup"}
          iconNavlink2={faUserPlus}
          txtNavlink2={"Sign up"}
          eventNavlink2={() => null}
        />
      )}
      <main>
        <Hero />
        <HomepageFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
