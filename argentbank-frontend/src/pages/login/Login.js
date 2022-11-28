import React, { useEffect } from "react";
import MainNav from "../../components/mainNav/MainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../../components/signInForm/SignInForm";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/**
 * Component React displaying login page
 * @component
 */
const Login = () => {
  const navigate = useNavigate();
  const { connection } = useSelector((state) => state.login);

  useEffect(() => {
    if (connection === "online") {
      navigate("/");
    }
  });

  return (
    <div className="current-page">
      <MainNav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
