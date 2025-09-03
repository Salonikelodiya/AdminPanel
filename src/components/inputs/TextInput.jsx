import React from "react";
import "./textInput.css";

function TextInput({ label, value, onChange, placeholder, name }) {
  return (
    <div className="text-input">
      <label className="text-label">{label}</label>
      <input
        className="text-field"
        type="text"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
}

export default TextInput;
