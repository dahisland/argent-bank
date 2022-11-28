import React from "react";
import PropTypes from "prop-types";

/**
 * Component React displaying header for page transactions (containing account data)
 * @component
 */
const TransactionHeader = ({ data }) => {
  return (
    <header className="transactionHeader">
      <div className="transactionHeader-content-wrapper">
        <h3 className="transactionHeader-title">{data.title}</h3>
        <p className="transactionHeader-amount">{data.amount}</p>
        <p className="transactionHeader-amount-description">
          {data.description}
        </p>
      </div>
    </header>
  );
};

TransactionHeader.propTypes = {
  data: PropTypes.object,
};

export default TransactionHeader;
