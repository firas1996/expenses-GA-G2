import "./ExpensesMenu.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./ExpensesChart/Chart";
import ExpensesData from "./ExpensesChart/ExpensesData";

const ExpensesMenu = ({ data }) => {
  return (
    <div className="menu">
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
