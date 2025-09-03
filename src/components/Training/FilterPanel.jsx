import React, { useState } from "react";
import "./filterPanel.css";

function FilterPanel({ onFilterChange }) {
  const [date, setDate] = useState({ year: 2019, month: 7 });
  const [branch, setBranch] = useState("Paris");
  const [field, setField] = useState("All");
  const [language, setLanguage] = useState("All");

  const handleApply = () => {
    onFilterChange({ date, branch, field, language });
  };

  return (
  
  
    <div className="filter-panel">
      
      <div className="filter-row" style={{ width: "180px", display: "flex", flexDirection: "column" }}>
  <div style={{
    fontSize: "1rem",
    color: "#222",
    marginBottom: "4px",
    fontWeight: 500
  }}>
    Select the date
  </div>
  <div style={{
    display: "flex",
    alignItems: "center",
    padding: "6px 0",
    background: "#eeeeee",
    borderRadius: "7px",
    justifyContent: "center",
    fontSize: "1.1rem",
    fontWeight: 580,
    gap: "18px"
  }}>
    {/* Left Arrow */}
    <button style={{
      background: "none",
      border: "none",
      color: "#2992fd",
      fontSize: "1.15rem",
      cursor: "pointer",
      padding: "0 4px"
    }}>&lt;</button>
    <span style={{
      minWidth: "70px",
      textAlign: "center",
      color: "#222"
    }}>
      July 2019
    </span>
    {/* Right Arrow */}
    <button style={{
      background: "none",
      border: "none",
      color: "#2992fd",
      fontSize: "1.15rem",
      cursor: "pointer",
      padding: "0 4px"
    }}>&gt;</button>
  </div>
</div>

      <div className="filter-row">
        <label>Branch:</label>
        <select value={branch} onChange={e => setBranch(e.target.value)}>
          <option value="Paris">Paris</option>
          {/* add more branches */}
        </select>
      </div>
      <div className="filter-row">
        <label>Field of Knowledge:</label>
        <select value={field} onChange={e => setField(e.target.value)}>
          <option value="All">All</option>
          {/* add more fields */}
        </select>
      </div>
      <div className="filter-row">
        <label>Language:</label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="All">All</option>
          {/* add more languages */}
        </select>
      </div>
      <button className="apply-button" onClick={handleApply}>Apply Filter</button>
    </div>
    
  );
}

export default FilterPanel;
