import React from "react";
import "./Table.css";

const Table = ({ columns, data, title }) => (
  <div className="comments-table-container">
    {title && <h2 className="table-title">{title}</h2>}
    <table className="comments-table">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx} className={idx % 2 !== 0 ? "alt-row" : ""}>
            {columns.map(col => (
              <td key={col.key}>{item[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
