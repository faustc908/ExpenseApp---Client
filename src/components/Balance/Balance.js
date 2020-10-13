import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import "./Balance.css"

//  Component to render users current balance

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const currentBalance = transactions.map(transaction => transaction.amount);

  const total = currentBalance.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h2>
        Expense Tracker
    </h2>
      <p className='description'>Enter your expenses and funds into the calculator to see what your budget is.  Keep track of your total budget, sales, and nuances in your expenses with the notes section.</p>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}
