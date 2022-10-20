//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [forename, setForename] = useState("")
  const [surname, setSurname] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const addUsername = (event) => {
    setUsername(event.target.value)
  }

  const addEmail = (event) => {
    setEmail(event.target.value)

  }

  const addForename = (event) => {
    setForename(event.target.value)
  }

  const addSurname = (event) => {
    setSurname(event.target.value)
  }

  const addPassword = (event) => {
    setPassword(event.target.value)
  }

  const addRepeatPassword = (event) => {
    setRepeatPassword(event.target.value)
  }

  return (
    <>
    {JSON.stringify(password)}
    <form  method="post" id="register">
      <label htmlFor='username'>Username:</label>
      <input type="text" name="username" id="username" value={username} onChange={addUsername} />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={email} onChange={addEmail} />

      <label htmlFor="forename">Forename: </label>
      <input type="text" name="forename" id="forename" value={forename} onChange={addForename}/>

      <label htmlFor="surname">Lastname:</label>
      <input type="text" name="surname" id="surname" value={surname} onChange={addSurname}/>

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" value={password} onChange={addPassword} />

      <label htmlFor="repeatPassword">Repeat password: </label>
      <input type="password" name="repeatPassword" id="repeatPassword" value={repeatPassword}  onChange={addRepeatPassword} />

      <label htmlFor="submit">Submit:</label>
      <button>submit</button>
    </form>
    </>
  );
}

export default App;
