import React, { useContext } from 'react';
import { Transaction } from '../Transaction/Transaction';
import { GlobalContext } from '../../context/GlobalState';

//  Component for transaction details

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Past Transactions</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
