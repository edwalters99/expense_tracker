import React, { useState } from 'react';
import TransactionList from './TransactionList';
import TransactionsFilter from './TransactionsFilter';
import Card from '../Card'


const Transactions = (props) => {
    const current = new Date();
    const currentMonth = current.getMonth();
    const [filteredMonth, setFilteredMonth] = useState(currentMonth);
  
    const filterChangeHandler = (selectedMonth) => {
        setFilteredMonth(selectedMonth);
        console.log(selectedMonth);
    };
  
    const filteredTransactions = props.items.filter((transaction) => {
        console.log(filteredMonth);
        if(filteredMonth === "-"){
            return transaction.date.getFullYear().toString()==='2022';
        }
        return  transaction.date.getMonth().toString()===filteredMonth;
    });
  
    return (
      <div>
        <Card className='Transactions'>
          <TransactionsFilter
            selected={filteredMonth}
            onChangeFilter={filterChangeHandler}
          />

          <TransactionList items={filteredTransactions} />
        </Card>
      </div>
    );
  };
  
  export default Transactions;
