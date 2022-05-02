import React, {useState} from 'react';
import TransactionForm from './TransactionForm';
import './NewTransaction.css';
import axios from 'axios';

const NewTransaction = (props) => {
    console.log(props);
    const [isEditing, setIsEditing] = useState(false);

    console.log(props);
    const TRANSACTION_SERVER_URL = `http://localhost:3000/users.json`;
    
    const saveTransactionDataHandler = (transactionData) => {
        setIsEditing(false);
        console.log(transactionData);
        let token = localStorage.getItem('token');
        fetch('http://localhost:3000/transactions.json', {
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`},
            body: transactionData,
        }).then(()=>{
            console.log('work');
        })
        // axios.post(TRANSACTION_SERVER_URL, transactionData).then((reps)=>{
        //     props.onAddTransaction(reps);
        //     console.log(transactionData);
        //     console.log(reps);
        // });
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler =() => {
        setIsEditing(false);    
    }

  return (
    <div className='new-transaction'>
        {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
            <TransactionForm 
                onSaveTransactionData={saveTransactionDataHandler} 
                onCancel={stopEditingHandler}
            />
        )} 
    </div>
  );
};

export default NewTransaction;