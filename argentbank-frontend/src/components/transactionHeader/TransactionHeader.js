import React from "react";

const TransactionHeader = ({ item }) => {
  return (
    <header className="transactionHeader">
      <div className="transactionHeader-content-wrapper">
        <h3 className="transactionHeader-title">{item.title}</h3>
        <p className="transactionHeader-amount">{item.amount}</p>
        <p className="transactionHeader-amount-description">
          {item.description}
        </p>
      </div>
    </header>
  );
};

export default TransactionHeader;
