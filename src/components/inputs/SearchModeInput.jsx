import React from "react";
import "./searchModeInput.css";

function SearchModeInput({ searchMode, onChangeMode, value, onChangeValue, placeholder }) {
  return (
    <div className="search-mode-input">
      <div className="search-mode-label-row">
        <label className="search-mode-label">Search mode</label>
        <div className="search-radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="searchMode"
              value="AND"
              checked={searchMode === "AND"}
              onChange={e => onChangeMode(e.target.value)}
              className="search-radio"
            />
            <span className="custom-radio"></span>
            AND
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="searchMode"
              value="OR"
              checked={searchMode === "OR"}
              onChange={e => onChangeMode(e.target.value)}
              className="search-radio"
            />
            <span className="custom-radio"></span>
            OR
          </label>
        </div>
      </div>
      <div className="search-input-row">
        <input
          type="text"
          value={value}
          onChange={onChangeValue}
          className="search-input"
          placeholder={placeholder}
        />
        <span className="search-dropdown-arrow">&#9660;</span>
      </div>
    </div>
  );
}

export default SearchModeInput;
