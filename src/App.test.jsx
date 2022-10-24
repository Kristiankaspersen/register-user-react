import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('should display the error message "enter all fields"', () => {
  render(<App />)

  //expect(document.getElementById('username')).toHaveValue("")
  expect(screen.getByLabelText(/username/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/username/i), {target: {value: 'dog'}})
  //expect(screen.getByLabelText(/username/i)).toHaveValue("dog")
  expect(document.getElementById('username')).toHaveValue("dog")
  expect(document.getElementById('email')).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/email/i), {target: {value: 'dog@dog'}})
  expect(document.getElementById('email')).toHaveValue("dog@dog")
  fireEvent.click(screen.getByText("submit"))
  expect(screen.getByText(/Enter all fields/i)).toHaveTextContent("Enter all fields")

})

it('should display the success message"', () => {
  render(<App />)

  expect(screen.getByLabelText(/username/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/username/i), {target: {value: 'dog'}})
  expect(screen.getByLabelText(/username/i)).toHaveValue("dog")

  expect(screen.getByLabelText(/email/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/email/i), {target: {value: 'dog@dog'}})
  expect(screen.getByLabelText(/email/i)).toHaveValue("dog@dog")

  expect(screen.getByLabelText(/forename/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/forename/i), {target: {value: 'test'}})
  expect(screen.getByLabelText(/forename/i)).toHaveValue("test")

  expect(screen.getByLabelText(/surname/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/surname/i), {target: {value: 'testesen'}})
  expect(screen.getByLabelText(/surname/i)).toHaveValue("testesen")

  expect(document.getElementById('password')).toHaveValue("")
  fireEvent.change(document.getElementById("password"), {target: {value: 'password'}})
  expect(document.getElementById('password')).toHaveValue("password")

  expect(document.getElementById('repeatPassword')).toHaveValue("")
  fireEvent.change(document.getElementById('repeatPassword'), {target: {value: 'password'}})
  expect(document.getElementById('repeatPassword')).toHaveValue("password")
  


  fireEvent.click(screen.getByText("submit"))
  expect(screen.getByText(/You have successfully registered dog/i)).toHaveTextContent("You have successfully registered dog")

})

it("should display don't match", () => {
  render(<App />)

  expect(screen.getByLabelText(/username/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/username/i), {target: {value: 'dog'}})
  expect(screen.getByLabelText(/username/i)).toHaveValue("dog")

  expect(screen.getByLabelText(/email/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/email/i), {target: {value: 'dog@dog'}})
  expect(screen.getByLabelText(/email/i)).toHaveValue("dog@dog")

  expect(screen.getByLabelText(/forename/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/forename/i), {target: {value: 'test'}})
  expect(screen.getByLabelText(/forename/i)).toHaveValue("test")

  expect(screen.getByLabelText(/surname/i)).toHaveValue("")
  fireEvent.change(screen.getByLabelText(/surname/i), {target: {value: 'testesen'}})
  expect(screen.getByLabelText(/surname/i)).toHaveValue("testesen")

  expect(document.getElementById('password')).toHaveValue("")
  fireEvent.change(document.getElementById("password"), {target: {value: 'password'}})
  expect(document.getElementById('password')).toHaveValue("password")

  expect(document.getElementById('repeatPassword')).toHaveValue("")
  fireEvent.change(document.getElementById('repeatPassword'), {target: {value: "noMatch"}})
  expect(document.getElementById('repeatPassword')).toHaveValue("noMatch")
  


  fireEvent.click(screen.getByText("submit"))
  expect(screen.getByText(/Password don't match/i)).toHaveTextContent("Password don't match")

})


//Sjekker om formen er der
// test('renders the form', () => {
//   render(<App />);
//   const formElement = document.getElementById("register")
//   expect(formElement).toBeInTheDocument();
// });

// test("renders username input", () => {
//   render(<App />);
//   const inputElement = document.getElementById("username")
//   expect(inputElement).toBeInTheDocument();
//  }); 

//  test("renders email input", () => {
//   render(<App />);
//   const inputElement = document.getElementById("email")
//   expect(inputElement).toBeInTheDocument();
//  }); 

//  test("renders forename input", () => {
//   render(<App />);
//   const inputElement = document.getElementById("forename")
//   expect(inputElement).toBeInTheDocument();
//  }); 

//  test("renders surname input", () => {
//   render(<App />);
//   const inputElement = document.getElementById("surname")
//   expect(inputElement).toBeInTheDocument();
//  }); 

//  test("renders password input field", () => {
//   render(<App />);
//   const inputElement = document.getElementById("password")
//   expect(inputElement).toBeInTheDocument();
//  }); 

//  test("renders repeatPassword input field", () => {
//   render(<App />);
//   const inputElement = document.getElementById("repeatPassword")
//   expect(inputElement).toBeInTheDocument();
//  }); 