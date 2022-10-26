import React from "react";
import { userAccountsData } from "../../data/staticData";
import BtnTransaction from "../btnTransaction/BtnTransaction";

const Accounts = () => {
  return (
    <div>
      <h2 className="sr-only">Accounts</h2>
      {userAccountsData.map((item, index) => (
        <section className="account" key={"account" + index}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{item.title}</h3>
            <p className="account-amount">{item.amount}</p>
            <p className="account-amount-description">{item.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <BtnTransaction />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Accounts;
