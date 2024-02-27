import Chart from "./Chart";

const ExpensesData = ({ expenses }) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jly", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const item of expenses) {
    chartData[item.date.getMonth()].value += item.price;
  }
  const values = chartData.map((item) => item.value);
  //   console.log(values);
  const max = Math.max(...values);
  const total = values.reduce((x, y) => {
    return x + y;
  });
  // console.log(total);
  // console.log(chartData);
  return <Chart chartData={chartData} max={max} total={total} />;
};
export default ExpensesData;
