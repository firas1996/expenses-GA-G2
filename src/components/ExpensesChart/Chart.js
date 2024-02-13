import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ data }) => {
  return (
    <div className="chart">
      {data.map((item) => {
        return <ChartBar label={item.label} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
