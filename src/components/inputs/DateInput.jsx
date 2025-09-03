import React from "react";
import "./dateInput.css";

function DateInput({ label, value, onChange, placeholder, name, CalendarIcon }) {
  return (
    <div className="date-input">
      <label className="date-label">{label}</label>
      <div className="date-field-wrapper">
        <input
          type="date"
          className="date-field"
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        />
        {/* CalendarIcon is a React component prop */}
        {CalendarIcon && (
          <span className="calendar-icon">
            <CalendarIcon />
          </span>
        )}
      </div>
    </div>
  );
}

export default DateInput;
