import React from "react";
import "./ProjectUI.css";

const legends = [
  { color: "legend-blue", label: "Workday", value: "8.00" },
  { color: "legend-red", label: "Holiday", value: "8.00" },
  { color: "legend-today", label: "Today", value: "" },
  { color: "legend-green", label: "Day off had (paid)", value: "" },
  { color: "legend-orange", label: "Overtime/undertime", value: "8.00" },
];

function LegendBox() {
  return (
    <div className="legend-box">
      <div className="legend-label">Legend</div>
      {legends.map((item, idx) => (
        <div className="legend-item" key={idx}>
          <span className={`legend-color-box ${item.color}`}>
            {item.value && <span className="legend-value">{item.value}</span>}
          </span>
          <span className="legend-name">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default LegendBox;
