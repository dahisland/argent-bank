import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

/**
 * Component React displaying form to edit and update transaction's data (category and notes)
 * @component
 */
const EditTransactionsForm = ({
  transactionData,
  inputEditedId,
  setInputEditedId,
}) => {
  const { register, handleSubmit } = useForm();

  /**
   * Data used for the input default values and labels in the form "edit transactions data"
   */
  const formData = [
    {
      name: "type",
      id: transactionData.transactionId + "-type-input",
      iconID: transactionData.transactionId + "-type-icon",
      label: "Transaction Type",
      value: transactionData.type,
      editable: false,
    },
    {
      name: "category",
      id: transactionData.transactionId + "-category-input",
      iconID: transactionData.transactionId + "-category-icon",
      label: "Category",
      value: transactionData.category,
      editable: true,
    },
    {
      name: "notes",
      id: transactionData.transactionId + "-notes-input",
      iconID: transactionData.transactionId + "-notes-icon",
      label: "Notes",
      value: transactionData.notes,
      editable: true,
    },
  ];

  /**
   * Function on form submit to action update transactions data with data collected
   * @param {object} data - Data collected from useForm()
   * @async
   */
  async function submitUpdateTransactionsForm(data) {
    const dataFormatted = {
      transactionId: transactionData.transactionId,
      category: data.category,
      notes: data.notes,
    };
    console.log(dataFormatted);
    setInputEditedId("");
  }

  return (
    <form
      className="transactions-form-edit"
      onSubmit={handleSubmit(submitUpdateTransactionsForm)}
    >
      {formData.map((obj, index) => (
        <React.Fragment
          key={
            "transaction-form-" + transactionData.transactionId + "-" + index
          }
        >
          <label htmlFor={obj.id}>{obj.label + " : "}</label>
          <input
            type="text"
            name={obj.name}
            {...register(obj.name)}
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
              <button type="submit" className="transaction-submit-button">
                <FontAwesomeIcon
                  icon={faSpellCheck}
                  id={obj.iconID}
                  className="icon-transaction--edited"
                />
              </button>
            ) : (
              <FontAwesomeIcon
                icon={faPen}
                id={obj.iconID}
                className="icon-transaction"
                onClick={() => setInputEditedId(obj.id)}
              />
            )
          ) : null}
          <br />
        </React.Fragment>
      ))}
    </form>
  );
};

EditTransactionsForm.propTypes = {
  data: PropTypes.object,
  idItemDeployed: PropTypes.string,
  inputEditedId: PropTypes.string,
  setInputEditedId: PropTypes.func,
};

export default EditTransactionsForm;
