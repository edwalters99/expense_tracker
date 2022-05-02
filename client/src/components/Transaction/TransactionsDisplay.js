import React, {useState} from 'react';
import NewTransaction from './NewTransaction';
// import Transactions from './Transactions';
import Navigation from '../Navigation';

const TransactionsDisplay = () => {
    const [transactions, setTransactions] = useState();
    const addTransactionHandler = (transaction) => {
        setTransactions((prevTransactions) => {
          return [transaction, ...prevTransactions];
        });
    };
    console.log(transactions);
    return (
        <div>
            <Navigation />
            <NewTransaction onAddTransaction={addTransactionHandler}/>
            {/* <Transactions items={transactions}/> */}
        </div>
    )

}

export default TransactionsDisplay;