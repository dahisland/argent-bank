import React from "react";
import { useSelector } from "react-redux";

const BtnTransaction = ({ navTo }) => {
  const { profileIsEdited } = useSelector((state) => state.profile);

  return (
    <button
      className={
        profileIsEdited
          ? "transaction-button bg-purple border-purple"
          : "transaction-button bg-green border-green"
      }
      onClick={navTo}
    >
      View transactions
    </button>
  );
};

export default BtnTransaction;
