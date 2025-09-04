
import React, { useState } from "react";
import "./background.css";
import minusicon from "../../assets/minusicon.svg"
import { useEffect } from "react";

const roles = ["Developer", "Tester", "Manager"];
const activities = ["Coding", "Design", "Review"];

const days = [
  { key: "mon", label: "15 / Mon" },
  { key: "tue", label: "16 / Tue" },
  { key: "wed", label: "17 / Wed" },
  { key: "thu", label: "18 / Thu" },
  { key: "fri", label: "19 / Fri" },
  { key: "sat", label: "20 / Sat" },
  { key: "sun", label: "21 / Sun" }
];

const initialRows = [
  { project: "E_Interview", role: "", activity: "", hours: { mon: 4, tue: "", wed: "", thu: "", fri: "", sat: "", sun: "" } },
  { project: "E_Bench_Engineering", role: "", activity: "", hours: { mon: 4, tue: "", wed: "", thu: "", fri: "", sat: "", sun: "" } }
];

function Background({ projects = [] }) {
    const [rows, setRows] = useState(() =>
    projects.map(p => ({
      project: p,
      role: "",
      activity: "",
      hours: { mon: "", tue: "", wed: "", thu: "", fri: "", sat: "", sun: "" }
    }))
  );

  useEffect(() => {
  // Guard: Check if projects exists and is an array
  if (Array.isArray(projects)) {
    const initialRows = projects.map((p) => ({
      project: p,
      role: "",
      activity: "",
      hours: { mon: "", tue: "", wed: "", thu: "", fri: "", sat: "", sun: "" }
    }));
    setRows(initialRows);
  }
}, [projects]);


  const handleCellChange = (ri, day, value) => {
    const val = value.replace(/[^0-9.]/g, "");
    setRows(prev =>
      prev.map((r, i) =>
        i === ri ? { ...r, hours: { ...r.hours, [day]: val } } : r
      )
    );
  };

  const handleSelectChange = (ri, field, value) => {
    setRows(prev =>
      prev.map((r, i) => (i === ri ? { ...r, [field]: value } : r))
    );
  };

  const addRow = () => {
    setRows([...rows, {
      project: "",
      role: "",
      activity: "",
      hours: { mon: "", tue: "", wed: "", thu: "", fri: "", sat: "", sun: "" }
    }]);
  };

  const removeRow = index => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const getTotal = () =>
    rows.reduce(
      (sum, row) =>
        sum +
        Object.values(row.hours).reduce(
          (r, h) => r + (parseFloat(h) > 0 ? parseFloat(h) : 0),
          0
        ),
      0
    );

  return (
    <div className="project-container">
      <table className="project-table">
        <thead>
          <tr>
             <th></th>
            <th>Project</th>
            <th>Role</th>
            <th>Activity</th>
            {days.map(d => (
              <th key={d.key}>{d.label}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            
            <tr key={ri}>
                <td>
                <img src={minusicon}  className="remove-btn"  onClick={() => removeRow(ri)} alt="minus icon" />
              </td>
              <td>
                <input value={row.project} readOnly className="readonly-input"  placeholder="Enter Project name"/>
              </td>
              <td>
                <select value={row.role} onChange={e => handleSelectChange(ri, "role", e.target.value)}>
                  <option value="">Select</option>
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </td>
              <td>
                <select value={row.activity} onChange={e => handleSelectChange(ri, "activity", e.target.value)}>
                  <option value="">Select</option>
                  {activities.map(act => (
                    <option key={act} value={act}>{act}</option>
                  ))}
                </select>
              </td>
              {days.map(d => (
                <td key={d.key}>
                  <input
                    type="text"
                    value={row.hours[d.key]}
                    onChange={e => handleCellChange(ri, d.key, e.target.value)}
                    className="hour-input"
                  />
                </td>
              ))}
             
            </tr>
            
          ))}
          
        </tbody>
      </table>
      <div style={{display:"flex", flexDirection:"row" , justifyContent:"space-between"}}>
        <div className="project-actions">
        <button className="add-row-btn" onClick={addRow}>+ Add row</button>
        <button className="add-overtime-btn">+ Add overtime</button>
      </div>
      <div className="project-footer">
        <button className="footer-btn">Save</button>
        <button className="footer-btn reject">Reject</button>
        <button className="footer-btn submit">Submit</button>
        <span className="total-cell">Total {getTotal().toFixed(2)}/40.00</span>
      </div>
      </div>
      
    </div>
  );
}

export default Background;
