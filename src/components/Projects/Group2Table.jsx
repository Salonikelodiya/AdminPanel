import React from 'react';

const tableContainerStyle = {
  width: '1125px',
  height: '584px',
  background: '#fff',
  boxShadow: '0 2px 8px #ccc',
  padding: 24,
  position: 'relative',
  fontFamily: 'Arial, sans-serif',
  overflowY: 'auto'
};

const resultCountStyle = {
  fontSize: 22,
  fontWeight: 500,
  marginBottom: 16
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse'
};

const thTdStyle = {
  borderBottom: '1px solid #eee',
  padding: 10,
  fontSize: 15,
  textAlign: 'left',
  background: '#fcfcfc'
};

const exportBtnStyle = {
  position: 'absolute',
  top: 20,
  right: 20,
  background: '#1976d2',
  color: '#fff',
  border: 'none',
  padding: '8px 24px',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: 16
};

export default function Group2Table({ data = [] }) {
  return (
    <div style={tableContainerStyle}>
      <div style={resultCountStyle}>Found: {data.length}</div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Practice</th>
            <th style={thTdStyle}>Project name</th>
            <th style={thTdStyle}>Short name</th>
            <th style={thTdStyle}>Status</th>
            <th style={thTdStyle}>Start date</th>
            <th style={thTdStyle}>End date</th>
            <th style={thTdStyle}>Account</th>
            <th style={thTdStyle}>Region</th>
            <th style={thTdStyle}>Industry</th>
            <th style={thTdStyle}>Source type</th>
            <th style={thTdStyle}>Billing entry</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={`${row.ShortName}-${idx}`}
              style={{ backgroundColor: idx % 2 === 1 ? '#f6f6f6' : 'transparent' }}
            >
              <td style={thTdStyle}>{row.Practice}</td>
              <td style={thTdStyle}>{row.ProjectName}</td>
              <td style={thTdStyle}>{row.ShortName}</td>
              <td style={thTdStyle}>{row.Status}</td>
              <td style={thTdStyle}>{row.StartDate}</td>
              <td style={thTdStyle}>{row.EndDate}</td>
              <td style={thTdStyle}>{row.Account}</td>
              <td style={thTdStyle}>{row.Region}</td>
              <td style={thTdStyle}>{row.Industry}</td>
              <td style={thTdStyle}>{row.SourceType}</td>
              <td style={thTdStyle}>{row.BillingEntry}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={exportBtnStyle} onClick={() => alert('Export to Excel triggered!')}>
        Export to Excel
      </button>
    </div>
  );
}
