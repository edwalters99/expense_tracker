import React from 'react';
import TransactionItem from './TransactionItem';
import './TransactionList.css'


const TransactionList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='transaction-list__fallback'>Found no transaction.</h2>;
  }

  return (
    <ul className='transaction-list'>
      {props.items.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          title={transaction.title}
          type={transaction.type}
          description={transaction.description}
          amount={transaction.amount}
          date={transaction.date}
        />
      ))}
    </ul>
  );
};

export default TransactionList;