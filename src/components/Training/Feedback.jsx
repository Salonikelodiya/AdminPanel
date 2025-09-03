import React, { useState } from "react";
import "./feedback.css";
import  createfeeback from "../../assets/createfeedback.svg";

const trainingsData = [
  { id: 1, date: "24 Apr", training: "Security Awareness", instructor: "Keithlyn O’Hara", hours: 1.00, feedback: null },
  { id: 2, date: "16 Feb", training: "Induction program: Office user manual", instructor: "Matthew Brandstock", hours: 1.00, feedback: null },
  { id: 3, date: "16 Feb", training: "Induction program: Security", instructor: "Chris Columbus", hours: 1.00, feedback: null },
  { id: 4, date: "11 Feb", training: "Induction program: Capability profile and corporate CV. Dashboard Overview", instructor: "Chris Columbus", hours: 1.50, feedback: null },
  { id: 5, date: "03 Feb", training: "Induction program: Career development in company", instructor: "Arnold Harris", hours: 2.00, feedback: null },
  { id: 6, date: "01 Feb", training: "Induction program: Office policy", instructor: "Arnold Harris", hours: 0.50, feedback: null },
];

function Feedback() {
  const [year, setYear] = useState(2019);
  const [selected, setSelected] = useState(null);
  const [rows, setRows] = useState(trainingsData);

  const handlePrevYear = () => setYear(prev => prev - 1);
  const handleNextYear = () => setYear(prev => prev + 1);

  const handleOpenFeedback = (row) => {
    setSelected(row);
  };

  const handleSubmitFeedback = (text) => {
    setRows(rows.map(r =>
      r.id === selected.id ? { ...r, feedback: text } : r
    ));
    setSelected(null);
  };

  return (
    <div className="trainings-table-container">
      <div className="trainings-header">
        <span className="trainings-title">Passed trainings:</span>
        <button onClick={handlePrevYear} className="arrow-btn">{"<"}</button>
        <span className="trainings-year">{year}</span>
        <button onClick={handleNextYear} className="arrow-btn">{">"}</button>
      </div>
      <table className="trainings-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Training</th>
            <th>Instructor</th>
            <th>Hours</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.date}</td>
              <td>{row.training}</td>
              <td>{row.instructor}</td>
              <td>{row.hours.toFixed(2)}</td>
              <td>
                {row.feedback ? (
                  <button className="view-btn" onClick={() => handleOpenFeedback(row)}>View</button>
                ) : (
                  <img src={createfeeback} alt="icon" className="give-btn" onClick={() => handleOpenFeedback(row)}/>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selected &&
        <div className="feedback-modal">
          {selected.feedback ?
            <div>
              <strong>Feedback:</strong>
              <div className="feedback-view">{selected.feedback}</div>
              <button className="close-btn" onClick={() => setSelected(null)}>Close</button>
            </div>
            :
            <form onSubmit={e => {
              e.preventDefault();
              handleSubmitFeedback(e.target.elements.feedback.value);
            }}>
              <textarea name="feedback" placeholder="Your feedback..." required />
              <button type="submit" className="submit-btn">Submit</button>
              <button type="button" className="close-btn" onClick={() => setSelected(null)}>Cancel</button>
            </form>
          }
        </div>
      }
    </div>
  );
}

export default Feedback;
