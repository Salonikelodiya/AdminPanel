import React, { useState } from "react";
import calendarSvg from '../../assets/Calender.svg'; // Use your SVG
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import DateInput from "../inputs/DateInput";
import StatusSelect from "../inputs/StatusSelect";
import "./ProjectFilterForm.css";
import { LuFileX } from "react-icons/lu";

export default function ProjectFilterFormContent() {
  const [form, setForm] = useState({
    projectName: "",
    budgetType: "",
    shortName: "",
    status: "In progress",
    projectDescription: "",
    practice: "",
    account: "",
    sourceType: "",
    msaSigner: "",
    billingEntity: "",
    industry: "",
    region: "",
    searchMode: "OR",
    searchValue: "",
    startDateFrom: "",
    startDateTo: "",
    finishDateFrom: "",
    finishDateTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStatusClear = () => {
    setForm((prev) => ({
      ...prev,
      status: ""
    }));
  };

  // Dummy options
  const budgetTypes = ["Any", "Type A", "Type B"];
  const practices = ["Select", "Practice 1", "Practice 2"];
  const accounts = ["Select", "Account 1", "Account 2"];
  const sourceTypes = ["Select", "Source 1", "Source 2"];
  const msaSigners = ["Select", "Signer 1", "Signer 2"];
  const billingEntities = ["Select", "Entity 1", "Entity 2"];
  const industries = ["Select", "Industry 1", "Industry 2"];
  const regions = ["Select", "North", "South"];

  return (
    <div className="filter-form-outer">
      <form className="filter-form-grid">
        {/* COLUMN 1 */}
        <div className="form-col">
          <TextInput
            label="Project name"
            value={form.projectName}
            onChange={handleChange}
            name="projectName"
            placeholder="Search..."
          
          />
          <TextInput
            label="Short name"
            value={form.shortName}
            onChange={handleChange}
            name="shortName"
            placeholder="Search..."
          />
          <TextInput
            label="Project description"
            value={form.projectDescription}
            onChange={handleChange}
            name="projectDescription"
            placeholder="Search..."
          />
        <div className="filter-subgroup">
          <SelectInput
            label="Practice"
            options={practices}
            value={form.practice}
            onChange={handleChange}
            name="practice"
          />
          <SelectInput
            label="Account"
            options={accounts}
            value={form.account}
            onChange={handleChange}
            name="account"
          />
          <SelectInput
            label="Source type"
            options={sourceTypes}
            value={form.sourceType}
            onChange={handleChange}
            name="sourceType"
          />
          <SelectInput
            label="MSA signer"
            options={msaSigners}
            value={form.msaSigner}
            onChange={handleChange}
            name="msaSigner"
          />
          <SelectInput
            label="Billing entity"
            options={billingEntities}
            value={form.billingEntity}
            onChange={handleChange}
            name="billingEntity"
          />
          <SelectInput
            label="Industry"
            options={industries}
            value={form.industry}
            onChange={handleChange}
            name="industry"
          />
          <SelectInput
            label="Region"
            options={regions}
            value={form.region}
            onChange={handleChange}
            name="region"
          />
          </div>
        </div>
        {/* COLUMN 2 */}
        <div className="form-col">
          <SelectInput
            label="Budget type"
            options={budgetTypes}
            value={form.budgetType}
            onChange={handleChange}
            name="budgetType"
          />
          <StatusSelect
            label="Status"
            value={form.status}
            options={["In progress", "Completed", "Paused"]}
            name="status"
            onChange={v => setForm(prev => ({ ...prev, status: v }))}
            onClear={handleStatusClear}
          />
          <div className="filter-subgroup">
            <DateInput
              label="Start date from"
              value={form.startDateFrom}
              onChange={e => handleDateChange("startDateFrom", e.target.value)}
              name="startDateFrom"
              placeholder="Select"
              CalendarIcon={() => <img src={calendarSvg} alt="calendar" />}
            />
            <DateInput
              label=""
              value={form.startDateTo}
              onChange={e => handleDateChange("startDateTo", e.target.value)}
              name="startDateTo"
              placeholder="Select"
              CalendarIcon={() => <img src={calendarSvg} alt="calendar" />}
            />
          </div>
          <div className="filter-subgroup">
            <DateInput
              label="Finish date from"
              value={form.finishDateFrom}
              onChange={e => handleDateChange("finishDateFrom", e.target.value)}
              name="finishDateFrom"
              placeholder="Select"
              CalendarIcon={() => <img src={calendarSvg} alt="calendar" />}
            />
            <DateInput
              label=""
              value={form.finishDateTo}
              onChange={e => handleDateChange("finishDateTo", e.target.value)}
              name="finishDateTo"
              placeholder="Select"
              CalendarIcon={() => <img src={calendarSvg} alt="calendar" />}
            />
          </div>
          <div className="search-mode-row">
            <div className="form-group" style={{display:"flex" ,justifyContent:"space-between", flexDirection:"row"}}>
              <label>Search mode</label>
              <div style={{ display: "flex", gap: "18px", alignItems: "center"  }}>
                <label>
                  <input
                    type="radio"
                    name="searchMode"
                    value="AND"
                    checked={form.searchMode === "AND"}
                    onChange={handleChange}
                  />
                  AND
                </label>
                <label>
                  <input
                    type="radio"
                    name="searchMode"
                    value="OR"
                    checked={form.searchMode === "OR"}
                    onChange={handleChange}
                  />
                  OR
                </label>
               
              </div>
               
            </div>
            <SelectInput
              label=""
              options={["Search..."]}
              value={form.searchValue}
              onChange={handleChange}
              name="searchValue"
            />
            
          </div>
        </div>
      </form>
    </div>
  );
}
