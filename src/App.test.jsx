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

//Sjekker om formen er der
test('renders the form', () => {
  render(<App />);
  const formElement = document.getElementById("register")
  expect(formElement).toBeInTheDocument();
});

test("renders username input", () => {
  render(<App />);
  const inputElement = document.getElementById("username")
  expect(inputElement).toBeInTheDocument();
 }); 

 test("renders email input", () => {
  render(<App />);
  const inputElement = document.getElementById("email")
  expect(inputElement).toBeInTheDocument();
 }); 

 test("renders forename input", () => {
  render(<App />);
  const inputElement = document.getElementById("forename")
  expect(inputElement).toBeInTheDocument();
 }); 

 test("renders surname input", () => {
  render(<App />);
  const inputElement = document.getElementById("surname")
  expect(inputElement).toBeInTheDocument();
 }); 

 test("renders password input field", () => {
  render(<App />);
  const inputElement = document.getElementById("password")
  expect(inputElement).toBeInTheDocument();
 }); 

 test("renders repeatPassword input field", () => {
  render(<App />);
  const inputElement = document.getElementById("repeatPassword")
  expect(inputElement).toBeInTheDocument();
 }); 