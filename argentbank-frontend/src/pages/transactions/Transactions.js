import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import TransactionHeader from "../../components/transactionHeader/TransactionHeader";
import TransactionTable from "../../components/transactionTable/TransactionTable";
import { actionGetAccountData } from "../../app/actions/getAccountData.action";
import { actionGetTransactionsData } from "../../app/actions/getTransactionsData.action";

const Transactions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { accountID } = useParams();
  const { connection } = useSelector((state) => state.login);
  const { accountData } = useSelector((state) => state.account);
  const { transactionsData } = useSelector((state) => state.transactions);

  const [accountFiltered, setAccountFiltered] = useState({ id: null });

  useEffect(() => {
    if (connection !== "offline") {
      actionGetAccountData(dispatch);
      actionGetTransactionsData(dispatch, accountID);
      setAccountFiltered(
        accountData.find((item) => item.accountId === accountID)
      );
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [accountID, accountData, dispatch, accountFiltered]);

  return (
    <div className="current-page">
      <MainNav />
      <main className="main bg-grey">
        <TransactionHeader data={accountFiltered} />
        <TransactionTable data={transactionsData} />
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;
