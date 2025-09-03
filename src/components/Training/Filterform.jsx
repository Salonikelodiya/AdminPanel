import React, { useState } from "react";
import "./filterForm.css";
import calendericon from "../../assets/Calender.svg"

function Filterform({ onFilter }) {
  const [filters, setFilters] = useState({
    field: "All",
    training: "All",
    instructors: "All",
    period: "Other",
    dateType: "actual",
    startDate: "",
    finishDate: "",
    showInactive: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form className="filter-grid-form" onSubmit={handleSubmit}>
      <h2 className="filter-title">Filter</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>Field of knowledge</label>
          <select name="field" value={filters.field} onChange={handleChange}>
            <option value="All">All</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="form-group">
          <label>Training</label>
          <select name="training" value={filters.training} onChange={handleChange}>
            <option value="All">All</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="form-group">
          <label>Instructors</label>
          <select name="instructors" value={filters.instructors} onChange={handleChange}>
            <option value="All">All</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="form-group">
          <label>Period</label>
          <select name="period" value={filters.period} onChange={handleChange}>
            <option value="Other">Other</option>
            {/* Add more options */}
          </select>
        </div>
        <div className="form-group form-radio">
          <label>Date Type</label>
          <div>
            <label>
              <input
                type="radio"
                name="dateType"
                value="actual"
                checked={filters.dateType === "actual"}
                onChange={handleChange}
              />
              Actual dates
            </label>
            <label>
              <input
                type="radio"
                name="dateType"
                value="planned"
                checked={filters.dateType === "planned"}
                onChange={handleChange}
              />
              Planned
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Start date</label>
          <input type="date" name="startDate" value={filters.startDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Finish date</label>
          <input type="date" name="finishDate" value={filters.finishDate} onChange={handleChange} />
        </div>
        <div className="form-group form-checkbox">
          <label>
            <input
              type="checkbox"
              name="showInactive"
              checked={filters.showInactive}
              onChange={handleChange}
            />
            <calendericon style={{
    position: "absolute",
    right: "8px",
    top: "40px",
    pointerEvents: "none",
    width: "18px",
    height: "18px",
    stroke: "#2992fd"
  }} />
            Show inactive trainings
          </label>
        </div>
      </div>
      <button type="submit" className="filter-apply-btn">Apply Filter</button>
    </form>
  );
}

export default Filterform;
