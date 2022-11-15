import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userAccountsData, transactionsCheckData } from "../../data/mockData";
import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import TransactionHeader from "../../components/transactionHeader/TransactionHeader";

const Transactions = () => {
  let { userID } = useParams();
  const [transactionData, setTransactionData] = useState({ type: null });
  const [status, setStatus] = useState("");

  const accountData = userAccountsData.body.accountData;
  const transactionsData = transactionsCheckData.body.transactions;

  useEffect(() => {
    setTransactionData(accountData.find((item) => item.id === userID));
    // eslint-disable-next-line
  }, [userID, accountData]);

  function handleDisplay(id) {
    status === id ? setStatus("") : setStatus(id);
  }

  return (
    <div className="current-page">
      <MainNav />
      <main className="main bg-grey">
        <div>
          <TransactionHeader item={transactionData} />
        </div>
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
            {transactionsData.map((item, index) => (
              <React.Fragment key={"transactions" + index}>
                <tr>
                  <td
                    onClick={() => handleDisplay(item.id)}
                    className="icon-deploy"
                  >
                    i
                  </td>
                  <td>{item.createdAt}</td>
                  <td>{item.description}</td>
                  <td>${item.amount}</td>
                  <td>${item.balance}</td>
                </tr>
                <tr
                  className={
                    status === item.id
                      ? "transaction-edit display"
                      : "transaction-edit display--none"
                  }
                >
                  <td colSpan={5}>
                    <form>
                      <label htmlFor="type">Transaction Type: </label>
                      <input
                        type="text"
                        name="type"
                        id="type"
                        defaultValue={item.type}
                      />
                      <br />
                      <label htmlFor="category">Category: </label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        defaultValue={item.category}
                      />
                      <br />
                      <label htmlFor="notes">Notes: </label>
                      <input
                        type="text"
                        name="notes"
                        id="notes"
                        defaultValue={item.notes}
                      />
                    </form>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;
