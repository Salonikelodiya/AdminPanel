import React, { useState } from "react";
import "./filterPanel.css";
import CustomYearPicker from "../inputs/CustomYearPicker"; // Import your year picker
import SelectInput from "../inputs/SelectInput"; 

function FilterPanel({ onFilterChange }) {
  const [date, setDate] = useState({ year: 2019, month: 7 });
  const [branch, setBranch] = useState("Paris");
  const [field, setField] = useState("All");
  const [language, setLanguage] = useState("All");

  const handleYearChange = (newYear) => {
    setDate(prev => ({ ...prev, year: newYear }));
  };

  const handleApply = () => {
    onFilterChange({ date, branch, field, language });
  };

  return (
    <div className="filter-panel">
      {/* Insert your custom year picker at the top */}
      <CustomYearPicker value={date.year} onChange={handleYearChange} />

      <div className="filter-row">
        <SelectInput
            label="Branch"
            options={[{ value: "1", label: "Neppal"} ,{ value: "2", label: "Mumbai" },{ value:"3",label:"Noida"}]}
            value={branch}
            onChange={e => setBranch(e.target.value)}
            name="branchtype"
          />
      </div>
      <div className="filter-row">
        <SelectInput
            label="Field of knowledge"
            options={[{ value: "1", label: "Frontend developer"} ,{ value: "2", label: "DevOps Engg" },{ value:"3",label:"UI/UX Designer"}]}
            value={field}
            onChange={e => setField(e.target.value)}
            name="fieldhtype"
          />
          </div>
      <div className="filter-row">
         <SelectInput
            label="Language"
            options={[{ value: "1", label: "English"} ,{ value: "2", label: "Hindi" },{ value:"3",label:"Marathi"}]}
            value={language}
            onChange={e => setLanguage(e.target.value)}
            name="languagetype"
          />
      </div>
      <button className="apply-button" onClick={handleApply}>Apply Filter</button>
    </div>
  );
}

export default FilterPanel;
