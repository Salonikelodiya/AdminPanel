import React, { useState } from "react";
import "./passedQuizzesTable.css";
import IndependentQuizzesTable from "./IndependentQuizzesTable"; 

// Images for smiley & sad face (SVG inline for demo)
const Smiley = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#4fd355"/>
    <ellipse cx="7.1" cy="10.1" rx="1.1" ry="1.1" fill="#fff"/>
    <ellipse cx="14.9" cy="10.1" rx="1.1" ry="1.1" fill="#fff"/>
    <path d="M7 14c1.5 2 6 2 8 0" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const Sad = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#ed6b6b"/>
    <ellipse cx="7.1" cy="10.1" rx="1.1" ry="1.1" fill="#fff"/>
    <ellipse cx="14.9" cy="10.1" rx="1.1" ry="1.1" fill="#fff"/>
    <path d="M8 15c2-2 6-2 8 0" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const quizzesData = [
  { id: 1, date: "24 Apr", training: "Security Awareness", quiz: "Quiz 1", passed: "25 Apr", singlePass: false },
  { id: 2, date: "16 Feb", training: "Induction program: Office user manual", quiz: "Quiz 1", passed: "16 Feb", singlePass: false },
  { id: 3, date: "16 Feb", training: "Induction program: Security", quiz: "Quiz 1", passed: "16 Feb", singlePass: false },
  { id: 4, date: "11 Feb", training: "Induction program: Capability profile and corporate CV. Dashboard Overview", quiz: "Quiz 1", passed: "12 Feb", singlePass: false },
  { id: 5, date: "03 Feb", training: "Induction program: Career development in company", quiz: "Quiz 1", passed: "03 Feb", singlePass: false },
  { id: 6, date: "01 Feb", training: "Induction program: Office policy", quiz: "Quiz 1", passed: "02 Feb", singlePass: false },
];

function PassedQuizzesTable() {
  const [year, setYear] = useState(2019);

  const handlePrevYear = () => setYear(prev => prev - 1);
  const handleNextYear = () => setYear(prev => prev + 1);

  return (
    <>
    <div className="quizzes-table-container">
      <div className="quizzes-header">
        <span className="quizzes-title">Passed quizzes:</span>
        <button onClick={handlePrevYear} className="arrow-btn">{"<"}</button>
        <span className="quizzes-year">{year}</span>
        <button onClick={handleNextYear} className="arrow-btn">{">"}</button>
      </div>
      <table className="quizzes-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Training</th>
            <th>Quiz name</th>
            <th>Passed date</th>
            <th>Single pass</th>
          </tr>
        </thead>
        <tbody>
          {quizzesData.map(row => (
            <tr key={row.id}>
              <td>{row.date}</td>
              <td>{row.training}</td>
              <td>{row.quiz}</td>
              <td>{row.passed}</td>
              <td>
                {row.id === 4
                  ? <Sad />
                  : <Smiley />
                }
                <span style={{marginLeft: '8px'}}>{row.singlePass ? "Yes" : "No"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <IndependentQuizzesTable/>
    </>
  );
}

export default PassedQuizzesTable;
