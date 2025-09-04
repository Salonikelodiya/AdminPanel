import React, { useState } from "react";
import MyTimeSheet from "./MyTimeSheet";
import Background from "./Background";
import Comments from "./Comments";
import ProjectAssign from "./ProjectAssign";
import "./timesheetmain.css";

const allProjects = [
  "E_Bench_Engineering", "E_Interview", "E_Company_Web_Site", "E_CNSL_Corp_Events",
  "E_CNSL_Delivery_Admin", "E_ENG_Delivery_Admin", "E_ENG_Corp_Events",
  "E_Performance_Evaluations", "E_Community_of_Practice",
  "E_Marketing and Training Support", "E_VFQ_Upskilling"
];

function TimesheetMain() {
  const [selectedProjects, setSelectedProjects] = useState([
    "E_Bench_Engineering",
    "E_Interview"
  ]);

  const toggleProject = (project) => {
    setSelectedProjects(prev =>
      prev.includes(project)
        ? prev.filter(p => p !== project)
        : [...prev, project]
    );
  };

  return (
    <div className="Time-sheet-main" >
      <MyTimeSheet />
     
      <Background projects={selectedProjects} />
      <Comments />
       <ProjectAssign
        projects={allProjects}
        selectedProjects={selectedProjects}
        onProjectToggle={toggleProject}
      />
    </div>
  );
}

export default TimesheetMain;
