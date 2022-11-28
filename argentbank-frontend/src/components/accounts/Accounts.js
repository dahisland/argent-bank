import React from "react";
import { useNavigate } from "react-router-dom";
import BtnTransaction from "../btnTransaction/BtnTransaction";
import PropTypes from "prop-types";

/**
 * Component React displaying data for each account's data type (checking, savings & credit-card)
 * @component
 */
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
          navTo={() => navigate("/transactions/" + data.accountId)}
        />
      </div>
    </section>
  );
};

Accounts.propTypes = {
  data: PropTypes.object,
};

export default Accounts;
