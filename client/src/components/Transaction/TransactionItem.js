import React, {useState} from 'react';
import Card from '../Card'
import './TransactionItem.css';
import {Button} from 'react-bootstrap';
import TransactionDate from './TransactionDate';
import TransactionEdit from './TransactionEdit';

const TransactionItem = (props) => {
  console.log(props);
  const [isEditing, setIsEditing] = useState(false);

    // const handleToggle= () => {
    //   setIsEditing(!isEditing);
    // }

    const showTransactionEdit = ()=>{
      setIsEditing(!isEditing);
    }

<<<<<<< HEAD
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

=======
    const stopEditingHandler = ()=>{
      setIsEditing(false);
    }
    const transactionData = {
        type_of: props.type,
        amount: props.amount, 
        title: props.title,
        description: props.description,  
        receipt: props.url, 
        date: props.date,
        category_id: Number(props.category_id),
    }
    console.log(isEditing);
>>>>>>> 8ccecee (transaction edit page)
    return (
      <li>
        {!isEditing && 
          <Card className='transaction-item'>
            <TransactionDate date={props.date} />
            <div className='transaction-item__description'>
              <h3>{props.type}</h3>
              <h4>{props.title}</h4>
              <span>{props.description}</span>
              <div className='transaction-item__price'>${props.amount}</div>
            </div>
            <div>
<<<<<<< HEAD
              <Button className='btn btn-info mr-1'onClick={handleEdit}>Edit</Button>
              <Button className='btn btn-danger' onClick={handleDelele}>Delete</Button>
=======
              <Button className='btn btn-info mr-1'onClick={showTransactionEdit}>Edit</Button>
              <Button className='btn btn-danger'>Delete</Button>
>>>>>>> 8ccecee (transaction edit page)
            </div>
          </Card>
        }
        {isEditing &&
          <Card className='transaction-item'>
            <TransactionEdit onCancel={stopEditingHandler}show={isEditing} items={transactionData}/>
          </Card>
        } 
      </li>
    );
  };
  
  export default TransactionItem;