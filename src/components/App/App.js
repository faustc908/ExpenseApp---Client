import React, { useEffect, useState } from "react";
import { Balance } from '../Balance/Balance';
import { IncomeExpenses } from '../IncomeExpenses/IncomeExpenses';
import { TransactionList } from '../TransactionList/TransactionList';
import { AddTransaction } from '../AddTransaction/AddTransaction';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../NavBar/NavBar';
import InputExpense from '../InputExpense/InputExpense';
import TransactionForm from '../TransactionForm/TransactionForm';
import config from '../config';
import { ContextProvider } from '../../context/GlobalState';
import { Route, Switch } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import './App.css';
require("dotenv").config();

library.add(faSearchDollar);

function App() {

  // Set states

  const [expense1, updateExpense] = useState([]);
  const [expense, setExpense] = useState([]);

  // Delete Method

  const removeExpense = async (id) => {
    try {
      fetch(`${config.API_ENDPOINT}/expense/${id}`, {
        method: "DELETE",
      });

      setExpense(expense.filter((expense) => expense.expense_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };


  // Get Method

  const grabExpense = async () => {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/expense`);
      const jsonData = await response.json();

      setExpense(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // State changes

  useEffect(() => {
    grabExpense();
  }, []);

  useEffect(() => {
    grabExpense();
  }, [expense1]);

  // Render Components

  return (
    <ContextProvider>
      <NavBar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path="/tracker" render={props =>
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
            <InputExpense updateExpense={updateExpense} />
            <TransactionForm expense={expense} removeExpense={removeExpense} />
          </div>}
        />
      </Switch>
    </ContextProvider>
  );
}

export default App;
