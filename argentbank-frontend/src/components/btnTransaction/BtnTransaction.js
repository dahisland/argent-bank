import React from "react";
import { useSelector } from "react-redux";

const BtnTransaction = () => {
  const { isEdited } = useSelector((state) => state.profile);

  return (
    <button
      className={
        isEdited
          ? "transaction-button bg-purple border-purple"
          : "transaction-button bg-green border-green"
      }
    >
      View transactions
    </button>
  );
};

export default BtnTransaction;
