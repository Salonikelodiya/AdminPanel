import React from "react";

export default function AndOrToggle({ label, name, value, onChange }) {
  return (
    <div className="and-or-toggle" >
       <div style={{display:"flex", gap:100}}>
        <label className="label-c" >{label}</label>
      <div className="toggle-buttons">
        <label>
          
          <input
            type="radio"
            name={name}
            value="AND"
            checked={value === "AND"}
            onChange={() => onChange(name, "AND")}
          />
          
          AND
        </label>
        <label>
          <input
            type="radio"
            name={name}
            value="OR"
            checked={value === "OR"}
            onChange={() => onChange(name, "OR")}
          />
          OR
        </label>
        
      </div>
       </div>
        <input
      
        name="search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className={"search-input" }
      />
    </div>
  );
}
