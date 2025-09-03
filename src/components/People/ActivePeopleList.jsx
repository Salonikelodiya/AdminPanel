import React from 'react';
import './ActivePeopleList.css';


const headers = [
  'Delivery billable', 'Delivery unbillable', 'Administration', 'CEO', 'Sales',
  'Marketing', 'Finance', 'HR', 'IT', 'Legal', 'PPS', 'L & D', 
];

const values = [
  233, 11, 8, 1, 15,
  11, 8, 4, 3, 2, 15, 1, 
];

export default function ActivePeopleList() {
  return (
    <div className="active-people-container">
      <div className="header-row">
        <h2 className="active-people-title">List of active people</h2>
        <button className="export-excel-btn">
          <span className="excel-icon">&#8681;</span> Export to Excel
        </button>
      </div>
      <div className="people-table">
        <div className="table-header">
          {headers.map(header => (
            <div key={header} className="table-cell table-header-cell">{header}</div>
          ))}
        </div>
        <div className="table-row">
          {values.map((value, idx) => (
            <div key={headers[idx]} className="table-cell">{value}</div>
          ))}
        </div>
      </div>
      <div className="summary-row">
        <span className="summary-delivery">Delivery: <b>581</b></span>
        <span className="summary-nondelivery">Non-delivery: <b>132</b></span>
        <span className="summary-total">Total: <b>713</b></span>
      </div>
    </div>
  );
}
