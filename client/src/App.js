
import { useState, useEffect } from 'react';
import './App.css';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Category from './components/Category';

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

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

  return (
    <div className="App">

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
    </div>
);
}
export default App;