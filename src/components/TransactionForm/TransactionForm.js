import React, { Fragment } from "react";
import EditNote from "../EditNote/EditNote";
import "./TransactionForm.css"

// Render for user added expenses

const TransactionForm = ({ expense, removeExpense }) => {
    return (
        <Fragment>
            <div className="form">
                {expense.map((expense) => (
                    <div key={expense.expense_id}>
                        <p>{expense.description}</p>
                        <EditNote expense={expense} />
                        <div>
                            <button
                                className="btn3"
                                type="submit"
                                onClick={() => removeExpense(expense.expense_id)}
                            >
                                Delete Note
                            </button>

                        </div>

                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default TransactionForm;
