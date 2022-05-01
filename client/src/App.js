
import { useState, useEffect } from 'react';
import './App.css';
// import {db} from './firebase';
import {collection, getDocs} from 'firebase/firestore';
import NewExpense from './components/Expense/NewExpense';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Category from './components/Category';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  // const expensesCollectionRef = collection(db, 'Expenses');

  useEffect(() => {
    const getExpenses = async () => {
      // const data = await getDocs(expensesCollectionRef);
      // setExpenses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      // console.log(data.docs);
    };

    getExpenses();
  }, []);
  // console.log(expenses);

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

  function signIn (user) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          password: user.password
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      if (result.token) {
        localStorage.setItem('token', result.token)
        setUser(result.user)
      } else {
        setError(result.error)
      }
    })
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {  
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result => {
        if (result.id) {
          setUser(result)
        }
      })
    }
  });

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

      {user.email ? <h2>Welcome, {user.first_name}</h2> :
      (
        <>
          <SignIn signIn={signIn} error={error} />
          <SignUp signUp={signUp} />
        </>
      )
      }
      
      {/* <Category /> */}
    </div>
);
}
export default App;