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

  const [submit, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)

  const addUsername = (event) => {
    setSubmitted(false)
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

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || email === '' || forename === '' || surname === '' || password === '' || repeatPassword === '') {
      setSubmitted(false);
      errorMissingFields()
      setError(true);

    } else if (repeatPassword !== password) {
      setSubmitted(false);
      errorPassword()
      setError2(true);

    } else {
      setSubmitted(true);
      successMessage()
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return(
      <div className="success"
        >
        <h4>You have successfully registered {username}</h4>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMissingFields = () => {
    return (
      <div className="error">
        <h4>Enter all fields</h4>
      </div>
    );
  };

  const errorPassword = () => {
    return (
      <div className="error">
        <h4>Password don't match</h4>
      </div>
    );
    
  }; 

  return (
    <> 
    {error ? errorMissingFields(): error2 ? errorPassword() : ""}
    {submit ? successMessage(): ""}
    <form method="post" id="register">
      <label htmlFor='username'>Username:</label>
      <input type="text" name="username" id="username" value={username} onChange={addUsername} />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={email} onChange={addEmail} />

      <label htmlFor="forename">Forename: </label>
      <input type="text" name="forename" id="forename" value={forename} onChange={addForename}/>

      <label htmlFor="surname">Surname:</label>
      <input type="text" name="surname" id="surname" value={surname} onChange={addSurname}/>

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" value={password} onChange={addPassword} />

      <label htmlFor="repeatPassword">Repeat password: </label>
      <input type="password" name="repeatPassword" id="repeatPassword" value={repeatPassword}  onChange={addRepeatPassword} />

      <label htmlFor="submit">Submit</label>
      <button onClick={handleSubmit} id="submitUser">submit</button>
    </form>
    </>
  );
}

export default App;
