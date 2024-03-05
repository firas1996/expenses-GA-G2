import AddExpense from "./components/AddExpense";
import ExpensesMenu from "./components/ExpensesMenu";

function App() {
  const expensesList = [
    {
      id: 1,
      title: "Car",
      price: 5000,
      date: new Date(2024, 5, 20),
    },
    {
      id: 2,
      title: "Education",
      price: 7200,
      date: new Date(2023, 10, 15),
    },
    {
      id: 3,
      title: "New PC",
      price: 3200,
      date: new Date(2023, 3, 1),
    },
    {
      id: 4,
      title: "Voyage",
      price: 2500,
      date: new Date(2025, 7, 30),
    },
  ];
  return (
    <div>
      <AddExpense />
      <ExpensesMenu data={expensesList} />
    </div>
  );
}

export default App;
