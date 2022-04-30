
import { useState, useEffect } from 'react';
import './App.css';
// import {db} from './firebase';
import {collection, getDocs} from 'firebase/firestore';
import NewExpense from './components/NewExpense';
function App() {
  const [expenses, setExpenses] = useState([]);
  // const expensesCollectionRef = collection(db, 'Expenses');

  useEffect(() => {
    const getExpenses = async () => {
      // const data = await getDocs(expensesCollectionRef);
      // setExpenses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      // console.log(data.docs);
    };

    getExpenses();
  }, []);
  console.log(expenses);
  return (
    <div className="App">
      <input placeholder="Name...."/>
      <button>Create New </button>
      <NewExpense/>
      {expenses.map((expense) => {
        return (
          <div>
            <h1>Amount: {expense.Amount}</h1>
            <h1>Description: {expense.description}</h1>
            <h1>Date: {expense.date.toDate().toDateString()}</h1>
          </div>
        );
      })}
    </div>
);
}
export default App;