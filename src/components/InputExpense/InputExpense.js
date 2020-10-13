import React, { useState } from "react";
import config from "../config"

const InputExpense = ({ updateExpense }) => {
    const [description, setDescription] = useState("");

    // Post function to post expense notes

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };

            const header = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            };
            await fetch(`${config.API_ENDPOINT}/expense`, header).then(async function (
                response
            ) {
                await response.json();
                updateExpense();
            });
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="input">
            <h1 className="appDesc">User Notes</h1>
            <p>Please enter notes below</p>
            <form onSubmit={onSubmitForm}>
                <input
                    className="inputBox"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="btn" type="button" onClick={onSubmitForm}>
                    Add note
        </button>
            </form>
        </div>
    );
};

export default InputExpense;
