import React from "react";

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

export default TransactionHeader;
