import React from "react";
import AssignedProjects from "./AssignedProjects";
import LegendBox from "./LegendBox";
import "./projectassign.css"

function ProjectDashboard({ projects, selectedProjects, onProjectToggle }) {
  return (
    <div className="Project-display">
     
        <AssignedProjects
           className="assigned-project"
          projects={projects}
          selectedProjects={selectedProjects}
          onProjectToggle={onProjectToggle}
        />
        <LegendBox className="legend-box" />
    
    </div>
  );
}

export default ProjectDashboard;
