import React, { useState } from "react";
import Tabs from "../Tabs";
import SearchIconActive from "../../assets/AllSearchActive.svg";
import PeopleIconActive from "../../assets/PeopleActive.svg";
import PeopleIconDeactive from "../../assets/PeopleDeactive.svg"
import SearchIconDeactive from "../../assets/AllSearchDeactive.svg"
import AllPeople from "./AllPeople";
import FindPersonForm from "./FindPersonForm"
import "./PeopleMainContent.css"

export default function PeopleMainContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    login: "",
    branch: "",
    id1C: "",
    practice: "",
    userType: "",
    userContractType: "",
    capability: "",
    technology: "",
    certificate: "",
    course: "",
    education: "",
    educationSpecialization: "",
    cvFilters: {
      capability: true,
      technology: true,
      certificate: true,
      course: true,
    },
    capabilitiesLogic: "OR",
    technologyLogic: "OR",
    certificatesLogic: "OR",
    coursesLogic: "OR",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogicChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSearch = () => {
    console.log("Search executed:", form);
  };

  const handleClear = () => {
    setForm({
      name: "",
      email: "",
      login: "",
      branch: "",
      id1C: "",
      practice: "",
      userType: "",
      userContractType: "",
      capability: "",
      technology: "",
      certificate: "",
      course: "",
      education: "",
      educationSpecialization: "",
      cvFilters: {
        capability: true,
        technology: true,
        certificate: true,
        course: true,
      },
      capabilitiesLogic: "OR",
      technologyLogic: "OR",
      certificatesLogic: "OR",
      coursesLogic: "OR",
    });
  };

  const tabs = [
  {
    label: "Find Person",
    icon: {
      active: SearchIconActive,
      deactive: SearchIconDeactive,
    },
    component: (
      <FindPersonForm
        form={form}
        handleChange={handleChange}
        handleLogicChange={handleLogicChange}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
    ),
  },
  {
    label: "All People",
    icon: {
      active: PeopleIconActive,
      deactive: PeopleIconDeactive,
    },
    component: <AllPeople />,
  },
];


  return <Tabs tabs={tabs} defaultTab={0} />;
}
