import React from "react";
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import AndOrToggle from "../inputs/AndOrToggle";
import "./PeopleMainContent.css"

export default function FindPersonForm({
  form,
  handleChange,
  handleLogicChange,
  handleSearch,
  handleClear,
}) {
  return (
    <form className="main-content-grid">
      
      <div className="filter-form1"  style={{}}>
        <h1 className="form-title">Filter</h1>
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
      <div className="form-row-subgroup">
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
      </div>

      {/* 1C ID + Practice */}
      <div className="form-row-subgroup">
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
     
      <div  style={{}}>
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
       <AndOrToggle
        label="Technology"
        name="TeachnologyLogic"
        value={form.capabilitiesLogic}
        onChange={handleLogicChange}
        
      />
      <AndOrToggle
        label="Certificate"
        name="CertificateLogic"
        value={form.capabilitiesLogic}
        onChange={handleLogicChange}
        
      />
      <AndOrToggle
        label="Cources"
        name="CourcesLogic"
        value={form.capabilitiesLogic}
        onChange={handleLogicChange}
        
      />
       <div className=" form-row-subgroup">
        <SelectInput  label="Education"
        name="EducationType"
        value={form.userContractType}
        onChange={handleChange}
        options={[
          { value: "any", label: "Any" },
          { value: "full", label: "Full-Time" },
          { value: "contract", label: "Contract" },
        ]}>


      </SelectInput>
      
       <TextInput
  
  name="cv"
  type="search"
  value={form.cv}
  onChange={handleChange}
  placeholder="Search CV..."
  style={{height:20 , background:"red"}}
/>
       </div>
        
       
      </div>
      
      {/* Search + Clear Buttons */}
      <div className="button-container" style={{ }}>
        <button type="button" className="clear-btn" onClick={handleClear}>
          Clear
        </button>
        <button type="button" className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </form>
  );
}
