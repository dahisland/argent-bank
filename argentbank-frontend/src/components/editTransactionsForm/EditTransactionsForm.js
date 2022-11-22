import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const EditTransactionsForm = ({
  data,
  idItemDeployed,
  inputEditedId,
  setInputEditedId,
}) => {
  const formData = [
    {
      name: "type",
      id: data.transactionId + "-type-input",
      iconID: data.transactionId + "-type-icon",
      label: "Transaction Type",
      value: data.type,
      editable: false,
    },
    {
      name: "category",
      id: data.transactionId + "-category-input",
      iconID: data.transactionId + "-category-icon",
      label: "Category",
      value: data.category,
      editable: true,
    },
    {
      name: "notes",
      id: data.transactionId + "-notes-input",
      iconID: data.transactionId + "-notes-icon",
      label: "Notes",
      value: data.notes,
      editable: true,
    },
  ];

  function inputTransactionEdited(inputId) {
    if (data.transactionId === idItemDeployed && inputEditedId !== inputId) {
      setInputEditedId(inputId);
    } else {
      setInputEditedId("");
    }
  }

  return (
    <td colSpan={5}>
      {formData.map((obj, index) => (
        <form
          className="transactions-form-edit"
          key={"transaction-form-" + data.transactionId + "-" + index}
        >
          <label htmlFor={obj.id}>{obj.label + " : "}</label>
          <input
            type="text"
            name={obj.name}
            id={obj.id}
            className={
              obj.editable && inputEditedId === obj.id
                ? "input-transaction--edited"
                : "input-transaction"
            }
            defaultValue={obj.value}
            readOnly={obj.editable && inputEditedId === obj.id ? false : true}
          />
          {obj.editable ? (
            inputEditedId === obj.id ? (
              <FontAwesomeIcon
                icon={faSpellCheck}
                id={obj.iconID}
                className="icon-transaction--edited"
                onClick={() => inputTransactionEdited(obj.id)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPen}
                id={obj.iconID}
                className="icon-transaction"
                onClick={() => inputTransactionEdited(obj.id)}
              />
            )
          ) : null}
        </form>
      ))}
    </td>
  );
};

EditTransactionsForm.propTypes = {
  data: PropTypes.object,
  idItemDeployed: PropTypes.string,
  inputEditedId: PropTypes.string,
  setInputEditedId: PropTypes.func,
};

export default EditTransactionsForm;
