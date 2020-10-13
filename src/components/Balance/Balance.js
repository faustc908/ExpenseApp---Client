import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

//  Component to render users current balance

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <p>Enter your expenses and funds into the calculator to see what your budget is.  Keep track of your total budget, sales, and nuances in your expenses with the notes section.</p>
      <h2>
        Expense Tracker
    </h2>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}
