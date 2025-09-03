import React, { useState } from "react";
import "./availableTrainingsTable.css";

// SVG for plus sign button
const PlusIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" fill="#f4f7fa" stroke="#dadada" />
    <path d="M11 7v8M7 11h8" stroke="#2992fd" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const trainingsData = [
  { id: 1, training: "Security Awareness", initiator: "Andrew Blick", owner: "25 Apr", language: "EN", field: "Process" },
  { id: 2, training: "Induction program: Office user manual", initiator: "", owner: "16 Feb", language: "EN", field: "Process" },
  { id: 3, training: "Induction program: Security", initiator: "", owner: "16 Feb", language: "RU", field: "Process" },
  { id: 4, training: "Induction program: Capability profile and corporate CV. Dashboard Overview", initiator: "", owner: "12 Feb", language: "RU", field: "Soft Skills" },
  { id: 5, training: "Induction program: Career development in company", initiator: "", owner: "03 Feb", language: "RU", field: "Process" },
  { id: 6, training: "Induction program: Office policy", initiator: "Hans Fillipinho", owner: "20 Jan", language: "FR", field: "Process" },
  { id: 7, training: "Risk management", initiator: "", owner: "18 Jan", language: "FR", field: "Testing" },
  { id: 8, training: "Product development", initiator: "", owner: "14 Jan", language: "FR", field: "Dev" },
  { id: 9, training: "SCRUM", initiator: "", owner: "05 Jan", language: "FR", field: "Support" },
];

function AvailableTrainingsTable() {
  const [year, setYear] = useState(2019);
  const [fieldFilter, setFieldFilter] = useState("All");

  const fields = ["All", "Process", "Soft Skills", "Testing", "Dev", "Support"];

  const handlePrevYear = () => setYear(prev => prev - 1);
  const handleNextYear = () => setYear(prev => prev + 1);

  // Filter dataset by field
  const filteredData = fieldFilter === "All"
    ? trainingsData
    : trainingsData.filter(row => row.field === fieldFilter);

  return (
    <div className="avail-trainings-table-container">
      <div className="avail-trainings-header">
        <span className="avail-trainings-title">Available trainings:</span>
        <button onClick={handlePrevYear} className="arrow-btn">{"<"}</button>
        <span className="avail-trainings-year">{year}</span>
        <button onClick={handleNextYear} className="arrow-btn">{">"}</button>

        <select
          className="field-select"
          value={fieldFilter}
          onChange={e => setFieldFilter(e.target.value)}
        >
          {fields.map(field => (
            <option key={field} value={field}>{field}</option>
          ))}
        </select>
      </div>
      <table className="avail-trainings-table">
        <thead>
          <tr>
            <th>Training</th>
            <th>Initiator</th>
            <th>Owner</th>
            <th>Language</th>
            <th>Field</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              <td>{row.training}</td>
              <td>{row.initiator}</td>
              <td>{row.owner}</td>
              <td>{row.language}</td>
              <td>{row.field}</td>
              <td><button className="plus-btn"><PlusIcon /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AvailableTrainingsTable;
