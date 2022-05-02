import React, {useState} from 'react';
import TransactionForm from './TransactionForm';
import './NewTransaction.css';
import axios from 'axios';

const NewTransaction = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState("");
    console.log(props);
    const TRANSACTION_SERVER_URL = `http://localhost:3000/users/${props.user}.json`;
    const CATEGORIES_SERVER_URL = 'http://localhost:3000/categories.json';

    const saveTransactionDataHandler = (transactionData) => {
        setIsEditing(false);
        console.log(transactionData);
        axios.post(TRANSACTION_SERVER_URL, transactionData).then((reps)=>{
            props.onAddTransaction(transactionData);
            console.log(transactionData);
        });
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
                categories={props.user.categories}
                onSaveTransactionData={saveTransactionDataHandler} 
                onCancel={stopEditingHandler}
            />
        )} 
    </div>
  );
};

export default NewTransaction;