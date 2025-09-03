import React from "react";
import "./statusSelect.css";

function StatusSelect({ label, value, options, onChange, onClear, name }) {
  return (
    <div className="status-select">
      <label className="status-select-label">{label}</label>
      <div className="status-select-wrapper">
        {/* Status pill if selected */}
        {value && (
          <span className="status-pill">
            {value}
            <button className="status-clear" onClick={onClear} tabIndex={-1}>
              &#10005;
            </button>
          </span>
        )}
        {/* Dropdown */}
        <select
          className="status-dropdown"
          value={value || ""}
          onChange={e => onChange(e.target.value)}
          name={name}
        >
          <option value="" disabled>Select status</option>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <span className="status-arrow">&#9660;</span>
      </div>
    </div>
  );
}

export default StatusSelect;
