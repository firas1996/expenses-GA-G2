import React from "react";
import "./ChartBar.css";

const ChartBar = () => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: "70%" }}></div>
      </div>
      <label className="chart-bar__label">label</label>
    </div>
  );
};

export default ChartBar;
