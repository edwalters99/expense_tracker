import React from 'react';
import Card from '../Card'
import './TransactionItem.css';
import TransactionDate from './TransactionDate';

const TransactionItem = (props) => {
    return (
      <li>
        <Card className='transaction-item'>
          <TransactionDate date={props.date} />
          <div className='transaction-item__description'>
            <h2>{props.type}</h2>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
            <div className='transaction-item__price'>${props.amount}</div>
          </div>
        </Card>
      </li>
    );
  };
  
  export default TransactionItem;