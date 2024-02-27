import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, setSelectedYear, selectedYear }) => {
  const changeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select onChange={changeHandler} value={selectedYear}>
        {years.map((item) => {
          return <option value={item}> {item} </option>;
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
