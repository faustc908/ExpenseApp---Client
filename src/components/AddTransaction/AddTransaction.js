import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

//  Add transaction to tracker

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);


  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    setText('');
    setAmount('');
    addTransaction(newExpense);
  }


  // Render transaction form

  return (
    <>
      <h3>Add new expense</h3>
      <form onSubmit={onSubmit} aria-label='amount'>
        <div className="form-control">
          <label aria-label="usernote" htmlFor="text">Expense description:</label>
          <input aria-label="usernote" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label aria-label="usernote" htmlFor="amount"
          >Amount (for expenses use -):
          </label>
          <input aria-label="usernote" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
