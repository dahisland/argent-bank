import React from "react";
import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";

/**
 * Component React displaying page Error 404
 * @component
 */
const Error404 = () => {
  return (
    <div className="current-page">
      <MainNav />
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
