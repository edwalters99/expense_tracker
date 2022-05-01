
import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Category from './components/Category/Category';
import NewTransaction from './components/Transaction/NewTransaction';
import Transactions from './components/Transaction/Transactions';
import Navigation from './components/Navigation';


function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [transactions, setTransactions] = useState(sample_transactions);

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

  const addTransactionHandler = (transaction) => {
    setTransactions((prevTransactions) => {
      return [transaction, ...prevTransactions];
    });
  }

  return (
    <div className="App">
      <Navigation />
      {console.log(user)}

      {user.email ? <h2>Welcome, {user.first_name}</h2> :
      (
        <>
          <SignIn signIn={signIn} error={error} />
          <SignUp signUp={signUp} />
        </>
      )
      }
      
      {/* <Category /> */}
      <NewTransaction onAddTransaction={addTransactionHandler}/>
      <Transactions items={transactions}/>
      
      
      <Link to="/categories">Categories</Link>

    </div>
);
}
export default App;

const sample_transactions = [
  {
    id: '1',
    title: 'Toilet Paper',
    type: 'Expense',
    description: '250 rolls pack',
    amount: 24.12,
    date: new Date(2022, 2, 14),
  },
  { 
      id: '2', 
      title: 'New TV', 
      type: 'Expense',
      description: 'Sony 4K Ultra HD',
      amount: 799.49, 
      date: new Date(2022, 2, 28) },
  {
    id: '3',
    title: 'Car Insurance',
    type: 'Expense',
    description: 'yearly payment',
    amount: 294.67,
    date: new Date(2022, 4, 1),
  },
  {
    id: '4',
    title: 'New Chair',
    type: 'Expense',
    description: 'good guy special sale',
    amount: 450.00,
    date: new Date(2022, 5, 1),
  },
  {
    id: '5',
    title: 'Salary',
    type: 'Income',
    description: 'weekly salary',
    amount: 4000.00,
    date: new Date(2022, 1, 30),
  },
];