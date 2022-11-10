import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import { faUserPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { resetStore } from "../../app/reduxActions/logoutAction";

const Error404 = () => {
  const dispatch = useDispatch();
  const { connexion } = useSelector((state) => state.login);
  const { profileData } = useSelector((state) => state.profile);

  return (
    <div className="current-page">
      {connexion === "connected" ? (
        <MainNav
          pathNavlink1={"/profile"}
          txtNavlink1={profileData.firstName}
          pathNavlink2={"/"}
          iconNavlink2={faSignOutAlt}
          txtNavlink2={"Sign out"}
          eventNavlink2={() => resetStore(dispatch)}
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
      <main className="main bg-dark">
        <div className="error404">
          <h1>ERROR 404</h1>
          <p>This page doesn't exist</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error404;
