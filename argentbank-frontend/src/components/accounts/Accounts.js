import React from "react";
import { useNavigate } from "react-router-dom";
import BtnTransaction from "../btnTransaction/BtnTransaction";

const Accounts = ({ data }) => {
  const navigate = useNavigate();
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{data.title}</h3>
        <p className="account-amount">{data.amount}</p>
        <p className="account-amount-description">{data.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <BtnTransaction
          navTo={() => navigate("/transactions/" + data.categoryId)}
        />
      </div>
    </section>
  );
};

export default Accounts;
