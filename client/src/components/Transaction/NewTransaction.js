import React, {useState} from 'react';

import TransactionForm from './TransactionForm';
import './NewTransaction.css';

const NewTransaction = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: "" //need to get the id from DB
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler =() => {
        setIsEditing(false);
    }

  return (
    <div className='new-expense'>
        {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
            <TransactionForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancel={stopEditingHandler}
            />
        )} 

    </div>
  );
};

export default NewTransaction;