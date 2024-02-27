import "./ExpensesMenu.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./ExpensesChart/Chart";
import ExpensesData from "./ExpensesChart/ExpensesData";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpensesMenu = ({ data }) => {
  const years = [
    ...new Set(data.map((item) => item.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  return (
    <div className="menu">
      <ExpensesFilter
        years={years}
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      <ExpensesData expenses={data} />
      {data.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            // key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default ExpensesMenu;
