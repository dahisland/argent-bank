import React from "react";
import { useNavigate } from "react-router-dom";
import BtnTransaction from "../btnTransaction/BtnTransaction";

const Accounts = ({ item }) => {
  const navigate = useNavigate();
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{item.title}</h3>
        <p className="account-amount">{item.amount}</p>
        <p className="account-amount-description">{item.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <BtnTransaction navTo={() => navigate("/transactions/" + item.id)} />
      </div>
    </section>
  );
};

export default Accounts;
