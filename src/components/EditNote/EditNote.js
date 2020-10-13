import React, { Fragment, useState } from "react";
import config from "../config"

const EditNote = ({ expense }) => {
    const [description, setDescription] = useState(expense.description);
    const [updateStatus, setUpdateStatus] = useState();

    // Edit expense method

    const updateDescriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description: description };
            fetch(`${config.API_ENDPOINT}/expense/${expense.expense_id}/${description}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }).then(data => {
                console.log(data);
                if (data.status === 200)
                    setUpdateStatus("updated");
                else
                    setUpdateStatus("update failed");
            });
        } catch (err) {
            console.error(err.message);
        }
    };

    // Render edit

    return (
        <Fragment>
            <div className="inputForm">
                <div>
                    <p className="editDesc">
                        If you want to edit the note add the entire new note below
          </p>
                </div>
                <div>
                    <input
                        className="inputBox2"
                        type="text"
                        value={description}
                        onChange={updateDescriptionHandler}
                    />
                </div>
                <div>
                    <button
                        className="btn2"
                        type="button"
                        onClick={updateDescription}
                    >
                        Edit note
          </button>
                </div>
                <div>{updateStatus}</div>
            </div>
        </Fragment>
    );
};

export default EditNote;
