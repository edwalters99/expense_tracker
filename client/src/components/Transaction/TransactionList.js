import React from 'react';
import TransactionItem from './TransactionItem';
import './TransactionList.css'


const TransactionList = (props) => {
  if (props.items.length === 0) {
    {console.log(props.items, "if")}
    // return <h2 className='transaction-list__fallback'>Found no transaction.</h2>;
    return <h2>Found no transaction.</h2>;
  } else {
    return (
      <ul className='transaction-list'>
        {console.log(props.items, 'else')}
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
  }


};

export default TransactionList;