import React from "react";
import "./selectInput.css";

function SelectInput({ label, options, value, onChange, name }) {
  return (
    <div className="select-input">
      <label className="select-label">{label}</label>
      <div className="select-wrapper">
        <select
          className="select-dropdown"
          value={value}
          onChange={onChange}
          name={name}
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <span className="select-arrow">&#9660;</span>
      </div>
    </div>
  );
}

export default SelectInput;
