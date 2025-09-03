import React, { useState } from "react";
import "./independentQuizzesTable.css";

// Demo data for 2019
const quizzesData = [
  { id: 1, date: "24 Apr", quiz: "Hibernate 3.0", singlePass: "Yes", time: "Infinitive", count: 49 },
  { id: 2, date: "16 Feb", quiz: "EJB", singlePass: "Yes", time: "Infinitive", count: 5 },
  { id: 3, date: "16 Feb", quiz: "SP Introduction", singlePass: "No", time: "Infinitive", count: 21 },
  { id: 4, date: "11 Feb", quiz: "SP management processes", singlePass: "Yes", time: "Infinitive", count: 33 },
  { id: 5, date: "03 Feb", quiz: "JSF", singlePass: "No", time: "Infinitive", count: 21 },
  { id: 6, date: "01 Feb", quiz: "Java programming - Build tools & Unit testing", singlePass: "Yes", time: "Infinitive", count: 54 },
];

function IndependentQuizzesTable() {
  const [year, setYear] = useState(2019);

  const handlePrevYear = () => setYear(prev => prev - 1);
  const handleNextYear = () => setYear(prev => prev + 1);

  return (
    <div className="ind-quizzes-table-container">
      <div className="ind-quizzes-header">
        <span className="ind-quizzes-title">Independent quizzes:</span>
        <button onClick={handlePrevYear} className="arrow-btn">{"<"}</button>
        <span className="ind-quizzes-year">{year}</span>
        <button onClick={handleNextYear} className="arrow-btn">{">"}</button>
      </div>
      <table className="ind-quizzes-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Quiz name</th>
            <th>Single pass</th>
            <th>Quiz time</th>
            <th>Qs count</th>
          </tr>
        </thead>
        <tbody>
          {quizzesData.map(row => (
            <tr key={row.id}>
              <td>{row.date}</td>
              <td>{row.quiz}</td>
              <td>{row.singlePass}</td>
              <td>{row.time}</td>
              <td>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IndependentQuizzesTable;
