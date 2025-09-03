import React from "react";
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import AndOrToggle from "../inputs/AndOrToggle";
import "./PeopleMainContent.css";

export default function FindPersonForm({
  form,
  handleChange,
  handleLogicChange,
  handleSearch,
  handleClear,
}) {
  return (
    <div className="form1">
    <h1 className="form-title">Filter</h1>
    <form className="main-content-grid">

      {/* Left Column */}
      <div className="filter-form1">
        

        {/* Name */}
        <TextInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Andrew Salgado"
        />

        {/* Email */}
        <TextInput
          label="Email address"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@mail.com"
        />

        {/* Login + Branch */}
        <div className="filter-subgroup1">
          <TextInput
            label="Login"
            name="login"
            value={form.login}
            onChange={handleChange}
            placeholder="Login"
          />
          <SelectInput
            label="Branch"
            name="branch"
            value={form.branch}
            onChange={handleChange}
            options={[
              { value: "delhi", label: "Delhi" },
              { value: "mumbai", label: "Mumbai" },
            ]}
          />
        

        {/* 1C ID + Practice */}
       
          <TextInput
            label="1C Id"
            name="id1C"
            value={form.id1C}
            onChange={handleChange}
            placeholder="Id"
          />
          <SelectInput
            label="Practice"
            name="practice"
            value={form.practice}
            onChange={handleChange}
            options={[
              { value: "dev", label: "Development" },
              { value: "qa", label: "QA" },
            ]}
          />
        </div>

        {/* User Type */}
        <SelectInput
          label="User Type"
          name="userType"
          value={form.userType}
          onChange={handleChange}
          options={[
            { value: "any", label: "Any" },
            { value: "internal", label: "Internal" },
            { value: "external", label: "External" },
          ]}
        />

        {/* User Contract Type */}
        <SelectInput
          label="User Contract Type"
          name="userContractType"
          value={form.userContractType}
          onChange={handleChange}
          options={[
            { value: "any", label: "Any" },
            { value: "full", label: "Full-Time" },
            { value: "contract", label: "Contract" },
          ]}
        />
      </div>

      {/* Right Column */}
      <div className="filter-form2">
        {/* CV Search */}
        <TextInput
          label="CV"
          name="cv"
          type="search"
          value={form.cv}
          onChange={handleChange}
          placeholder="Search CV..."
        />

        {/* Capability Logic */}
        <AndOrToggle
          label="Capabilities"
          name="capabilitiesLogic"
          value={form.capabilitiesLogic}
          onChange={handleLogicChange}
        />

        {/* Technology Logic */}
        <AndOrToggle
          label="Technology"
          name="technologyLogic"
          value={form.technologyLogic}
          onChange={handleLogicChange}
        />

        {/* Certificate Logic */}
        <AndOrToggle
          label="Certificate"
          name="certificateLogic"
          value={form.certificateLogic}
          onChange={handleLogicChange}
        />

        {/* Courses Logic */}
        <AndOrToggle
          label="Courses"
          name="coursesLogic"
          value={form.coursesLogic}
          onChange={handleLogicChange}
        />

        {/* Education + Additional CV Search in a row */}
        <div className="form-row-subgroup">
          <SelectInput
            label="Education"
            name="educationType"
            value={form.educationType}
            onChange={handleChange}
            options={[
              { value: "any", label: "Any" },
              { value: "full", label: "Full-Time" },
              { value: "contract", label: "Contract" },
            ]}
          />
          {/* Removed duplicate CV input; keep only once if needed */}
        </div>
      
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button type="button" className="clear-btn" onClick={handleClear}>
          Clear
        </button>
        <button type="button" className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </form>
    </div>
  );
}
