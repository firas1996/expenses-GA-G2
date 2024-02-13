import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartData }) => {
  return (
    <div className="chart">
      {chartData.map((item) => {
        return <ChartBar label={item.label} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
