import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import EditTransactionsForm from "../editTransactionsForm/EditTransactionsForm";

const TransactionTable = ({ data }) => {
  const [idItemDeployed, setIdItemDeployed] = useState("");
  const [inputEditedId, setInputEditedId] = useState("");

  function handleDeploy(transactionId) {
    if (idItemDeployed === transactionId) {
      setIdItemDeployed("");
      setInputEditedId("");
    } else {
      setIdItemDeployed(transactionId);
      setInputEditedId("");
    }
  }

  return (
    <table className="transactions-list">
      <thead>
        <tr>
          <th></th>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
          <th>BALANCE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={"transactions" + index}>
            <tr
              className={
                idItemDeployed === item.transactionId
                  ? "transaction-item-row--deployed"
                  : "transaction-item-row"
              }
            >
              <td
                onClick={() => handleDeploy(item.transactionId)}
                className="icon-deploy"
              >
                {idItemDeployed === item.transactionId ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </td>
              <td>{item.createdAt}</td>
              <td>{item.description}</td>
              <td>${item.amount}</td>
              <td>${item.balance}</td>
            </tr>
            <tr
              className={
                idItemDeployed === item.transactionId
                  ? "transaction-item-hiddenRow--deployed"
                  : "transaction-item-hiddenRow--hidden"
              }
            >
              <EditTransactionsForm
                data={item}
                idItemDeployed={idItemDeployed}
                inputEditedId={inputEditedId}
                setInputEditedId={setInputEditedId}
              />
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
