//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form  method="get">
      <label htmlFor='username'>Username:</label>
      <input type="text" name="username" id="username" />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="forname">Forname: </label>
      <input type="text" name="forname" id="forname" />

      <label htmlFor="lastname">Lastname:</label>
      <input type="text" name="lastname" id="forname"/>

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" />

      <label htmlFor="repeatPassword">Repeat password: </label>
      <input type="password" name="repeatPassword" id="repeatPassword" />
      
      <label htmlFor="submit">Submit:</label>
      <button>submit</button>
    </form>
  );
}

export default App;
