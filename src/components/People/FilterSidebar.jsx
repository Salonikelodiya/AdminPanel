import React from 'react';
import './FilterSidebar.css';
import { useState } from 'react';

const filterCounts = {
  regions: { UK: 111, US: 98, France: 45 },
  branches: { London: 111, Liverpool: 12, Manchester: 5, Leeds: 3, Cardiff: 1 },
  divisions: { Management: 43, Finance: 10, Legal: 1, Operation: 1, IT: 1 }
};



export default function FilterSidebar({ filters, setFilters }) {
  
  const handleCheckbox = (group, item) => {
    setFilters(prev => ({
      ...prev,
      [group]: { ...prev[group], [item]: !prev[group][item] }
    }));
  };

  const handleClear = () => {
    setFilters({
      regions: Object.fromEntries(Object.keys(filters.regions).map(k => [k, false])),
      branches: Object.fromEntries(Object.keys(filters.branches).map(k => [k, false])),
      divisions: Object.fromEntries(Object.keys(filters.divisions).map(k => [k, false])),
    });
  };

  return (
    <div className="filter-sidebar">
      <h2 className="filter-title">Filter</h2>

      <div className="filter-group">
        <div className="filter-label">Regions</div>
        {Object.keys(filters.regions).map((name) => (
          <label className="checkbox-row" key={name}>
            <input
              type="checkbox"
              checked={filters.regions[name]}
              onChange={() => handleCheckbox('regions', name)}
              className="custom-checkbox"
            />
            {`${name} (${filterCounts.regions[name] || 0})`}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <div className="filter-label">Branches</div>
        {Object.keys(filters.branches).map((name) => (
          <label className="checkbox-row" key={name}>
            <input
              type="checkbox"
              checked={filters.branches[name]}
              onChange={() => handleCheckbox('branches', name)}
              className="custom-checkbox"
            />
            {`${name} (${filterCounts.branches[name] || 0})`}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <div className="filter-label">Divisions</div>
        {Object.keys(filters.divisions).map((name) => (
          <label className="checkbox-row" key={name}>
            <input
              type="checkbox"
              checked={filters.divisions[name]}
              onChange={() => handleCheckbox('divisions', name)}
              className="custom-checkbox"
            />
            {`${name} (${filterCounts.divisions[name] || 0})`}
          </label>
        ))}
      </div>

      <button className="filter-clear-btn" onClick={handleClear}>Clear</button>
    </div>
  );
}
