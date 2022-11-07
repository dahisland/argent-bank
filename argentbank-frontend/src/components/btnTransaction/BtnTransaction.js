import React from "react";
import { useSelector } from "react-redux";

const BtnTransaction = () => {
  const profileData = useSelector((state) => state.profile);
  const profileEdit = profileData.isEdited;

  return (
    <button
      className={
        profileEdit
          ? "transaction-button bg-purple border-purple"
          : "transaction-button bg-green border-green"
      }
    >
      View transactions
    </button>
  );
};

export default BtnTransaction;
