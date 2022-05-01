
import { useState, useEffect } from 'react';
import './App.css';
// import {db} from './firebase';
import {collection, getDocs} from 'firebase/firestore';
import NewExpense from './components/Expense/NewExpense';
import SignUp from './components/SignUp';
import Category from './components/Category';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState({});

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

  function signUp (user) {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          password: user.password,
          password_confirmation: user.password_confirmation
        }
      })
    })
    .then(response => response.json())
    .then(returnedUser => setUser(returnedUser))
  }

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

      {user.email ? <h2>Welcome {useState.user.first_name}</h2> : 
        <SignUp signUp={signUp} />
      }
      <Category />
    </div>
);
}
export default App;