import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditTransactionsForm = ({ data }) => {
  return (
    <td colSpan={5}>
      <form className="transactions-form-edit">
        <label htmlFor="type">Transaction Type : </label>
        <input
          type="text"
          name="type"
          id="type"
          defaultValue={data.type}
          readOnly
        />
      </form>
      <form className="transactions-form-edit">
        <label htmlFor="category">Category : </label>
        <input
          type="text"
          name="category"
          id="category"
          defaultValue={data.category}
        />
        <FontAwesomeIcon icon={faPen} />
      </form>
      <form className="transactions-form-edit">
        <label htmlFor="notes">Notes : </label>
        <input type="text" name="notes" id="notes" defaultValue={data.notes} />
        <FontAwesomeIcon icon={faPen} />
      </form>
    </td>
  );
};

export default EditTransactionsForm;
