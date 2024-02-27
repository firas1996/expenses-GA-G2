import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartData, total, max }) => {
  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartBar
            label={item.label}
            value={item.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default Chart;
