import React from "react";
import "./ProjectUI.css";

function AssignedProjects({ projects, selectedProjects, onProjectToggle }) {
  return (
    <div className="assigned-projects-wrapper" >
      <div className="assigned-projects-title">
        Projects you are assigned to ({projects.length})
      </div>
      <div className="assigned-projects-list">
        {projects.map(proj => {
          const isSelected = selectedProjects.includes(proj);
          return (
            <span
              key={proj}
              className={`project-pill${isSelected ? " selected" : ""}`}
              onClick={() => onProjectToggle(proj)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if(e.key === "Enter") onProjectToggle(proj)}}
            >
              {proj}
            </span>
          );
        })}
      </div>
    </div>
  );
}


export default AssignedProjects;
