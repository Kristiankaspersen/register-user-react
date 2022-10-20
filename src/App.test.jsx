import { render, screen } from '@testing-library/react';
import App from './App';

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