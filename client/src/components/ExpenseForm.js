import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const descriptionChangeHandler = (event)=>{
        setEnteredDescription(event.target.value);

    }
 
    const amountChangeHandler = (event)=> {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    
    const submitHandler =(event) => {
        event.preventDefault();  

        const expenseData = {
            description: enteredDescription,   
            amount: enteredAmount, 
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredDescription('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Description</label>
                <input type="text" value={enteredDescription} onChange={descriptionChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;