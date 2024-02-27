import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, value, total, max }) => {
  let fill = "0%";
  if (max > 0) {
    fill = Math.round((value / max) * 100);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: `${fill}%` }}></div>
      </div>
      <label className="chart-bar__label">{label}</label>
    </div>
  );
};

export default ChartBar;
