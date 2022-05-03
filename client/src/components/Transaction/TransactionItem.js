import React, {useState} from 'react';
import Card from '../Card'
import './TransactionItem.css';
import {Button} from 'react-bootstrap';
import TransactionDate from './TransactionDate';

const TransactionItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

    // const handleToggle= () => {
    //   setIsEditing(!isEditing);
    // }

    const handleEdit = (event) => {
      event.preventDefault();
      // const transactionData = {
      //   type_of: enteredType,
      //   amount: enteredAmount, 
      //   title: enteredTitle,
      //   description: enteredDescription,  
      //   receipt: url, 
      //   date: enteredDate,
      //   category_id: Number(enteredCategory),
      // };

    }

    return (
      <li>
        {/* {isEditing && 
        <Card className='transaction-item'>
          <TransactionDate date={props.date} />
          <div className='transaction-item__description'>
            <h2>{props.type}</h2>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
            <div className='transaction-item__price'>${props.amount}</div>
          </div>
          <div>
            <Button className="btn btn-info mr-1"onClick={handleEdit}>Update</Button>
            <Button className="btn btn-danger" onClick={handleToggle}>Cancel</Button>
          </div>
        </Card>
        }
        {!isEditing && */}
          <Card className='transaction-item'>
            <TransactionDate date={props.date} />
            <div className='transaction-item__description'>
              <h2>{props.type}</h2>
              <h3>{props.title}</h3>
              <span>{props.description}</span>
              <div className='transaction-item__price'>${props.amount}</div>
            </div>
            <div>
              <Button className='btn btn-info mr-1'onClick={handleEdit}>Edit</Button>
              <Button className='btn btn-danger'>Delete</Button>
            </div>
          </Card>
      </li>
    );
  };
  
  export default TransactionItem;