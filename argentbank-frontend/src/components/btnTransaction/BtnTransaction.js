import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

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

BtnTransaction.propTypes = {
  navTo: PropTypes.func,
};

export default BtnTransaction;
