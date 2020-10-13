import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

// Component that shows expenses/funds on the tracker

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const addMoney = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const purchase = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Funds</h4>
        <p className="money plus">{addMoney}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">{purchase}</p>
      </div>
    </div>
  )
}
