import { useState } from "react";
import "./AddExpense.css";

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const submitForm = (event) => {};
  return (
    <div className="add-expense">
      <form onSubmit={submitForm}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input required placeholder="Title" onChange={titleChangeHandler} />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input required placeholder="Price" type="number" min="0" />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input required type="date" min="2021-01-12" max="2027-01-01" />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
