import React, { useState } from 'react';

const industries = [
  'All', 'Banking', 'Financial', 'Government', 'Healthcare', 'Hi-Tech', 'Insurance', 'ISV',
  'Logistics', 'Media', 'Pharma', 'Public', 'Retail', 'Technology', 'Telecom', 'Utilities',
  'Internal', 'Others'
];

const statuses = [
  { label: 'In progress', checked: true },
  { label: 'Upcoming', checked: true },
  { label: 'Suspended', checked: false },
  { label: 'Completed', checked: false },
  { label: 'Anticipated', checked: false }
];

export default function Group3Filter({ onFilterChange }) {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStatuses, setSelectedStatuses] = useState(
    statuses.reduce((acc, s) => ({ ...acc, [s.label]: s.checked }), {})
  );

  const containerStyle = {
    width: '1128px',
    height: '236px',
    background: '#fff',
    boxShadow: '0 2px 8px #ccc',
    padding: 24,
    fontFamily: 'Arial, sans-serif'
  };

  const industryBtnStyle = (active) => ({
    border: '1px solid #1976d2',
    borderRadius: '20px',
    padding: '8px 20px',
    margin: '0 8px 8px 0',
    background: active ? '#1976d2' : '#fff',
    color: active ? '#fff' : '#1976d2',
    cursor: 'pointer',
    display: 'inline-block'
  });

  const statusLabelStyle = {
    marginRight: 24,
    fontSize: 16,
    cursor: 'pointer'
  };

  const statusCountsStyle = {
    float: 'right',
    marginTop: 16,
    fontSize: 16,
    color: '#666'
  };

  function handleIndustryClick(industry) {
    setSelectedIndustry(industry);
    if (onFilterChange) {
      onFilterChange({ industry, statuses: selectedStatuses });
    }
  }

  function handleStatusChange(e) {
    const { name, checked } = e.target;
    const newStatuses = { ...selectedStatuses, [name]: checked };
    setSelectedStatuses(newStatuses);
    if (onFilterChange) {
      onFilterChange({ industry: selectedIndustry, statuses: newStatuses });
    }
  }

  return (
    <div style={containerStyle}>
      <h2>Project list</h2>

      <div style={{ marginBottom: 20 }}>
        {industries.map((industry) => (
          <button
            key={industry}
            type="button"
            style={industryBtnStyle(industry === selectedIndustry)}
            onClick={() => handleIndustryClick(industry)}
          >
            {industry}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: 20 }}>
        {statuses.map(({ label }) => (
          <label key={label} style={statusLabelStyle}>
            <input
              type="checkbox"
              name={label}
              checked={!!selectedStatuses[label]}
              onChange={handleStatusChange}
            />{' '}
            {label}
          </label>
        ))}
      </div>

      <div style={statusCountsStyle}>
        <span>In progress <b>581</b></span> &nbsp;&nbsp;
        <span>Upcoming <b>2</b></span>
      </div>
    </div>
  );
}
