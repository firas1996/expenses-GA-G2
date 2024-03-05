import { useState } from "react";
import "./AddExpense.css";

const AddExpense = () => {
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [date, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });
  //   const titleChangeHandler = (event) => {
  //     // setTitle(event.target.value);
  //     // setUserInput({ ...userInput, title: event.target.value });
  //     setUserInput((prevState) => {
  //       return { ...prevState, title: event.target.value };
  //     });
  //   };
  //   const priceChangeHandler = (event) => {
  //     // setPrice(event.target.value);
  //     // setUserInput({ ...userInput, price: event.target.value });
  //     setUserInput((prevState) => {
  //       return { ...prevState, price: event.target.value };
  //     });
  //   };
  //   const dateChangeHandler = (event) => {
  //     // setDate(event.target.value);
  //     // setUserInput({ ...userInput, date: event.target.value });
  //     setUserInput((prevState) => {
  //       return { ...prevState, date: event.target.value };
  //     });
  //   };
  const handelInputs = ({ target }) => {
    const { name, value } = target;
    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(userInput);
    setUserInput({
      title: "",
      price: "",
      date: "",
    });
    // console.log(title);
    // console.log(price);
    // console.log(date);
    // setTitle("");
    // setPrice("");
    // setDate("");
  };
  return (
    <div className="add-expense">
      <form onSubmit={submitForm}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              name="title"
              value={userInput.title}
              onChange={handelInputs}
            />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              name="price"
              value={userInput.price}
              onChange={handelInputs}
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min="2021-01-12"
              max="2027-01-01"
              name="date"
              value={userInput.date}
              onChange={handelInputs}
            />
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
