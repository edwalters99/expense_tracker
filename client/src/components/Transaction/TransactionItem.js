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

    const handleDelele = (event) => {
      event.preventDefault();
      console.log(props.id)
      let token = localStorage.getItem('token')
      const id = props.id
      fetch(`http://localhost:3000/transactions/${id}`, {
          method: 'DELETE',
          headers: {  
            'Authorization': `Bearer ${token}`
          }
      })
      .then(response => {
        console.log(response.status)
        if (response.status === 204) {
          props.onDeleteTransaction(props.id)
        }
      })
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
              <Button className='btn btn-danger' onClick={handleDelele}>Delete</Button>
            </div>
          </Card>
      </li>
    );
  };
  
  export default TransactionItem;