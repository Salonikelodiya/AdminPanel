import React from "react";
import "./noTrainingRegistrations.css";

function NoTrainingRegistrations() {
  return (
    <div className="no-training-container">
      {/* SVG placeholder illustration */}
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" style={{marginBottom: "10px"}}>
        <rect x="30" y="25" width="38" height="52" rx="4" fill="#f4f7fa" stroke="#dadada" strokeWidth="2"/>
        <rect x="24" y="19" width="38" height="52" rx="4" fill="#fff" stroke="#dadada" strokeWidth="2"/>
        <rect x="24" y="19" width="38" height="8" rx="2" fill="#1474fb"/>
        <circle cx="30" cy="23" r="2" fill="#2992fd"/>
        <circle cx="48" cy="23" r="2" fill="#2992fd"/>
        {/* Add confetti dots */}
        <circle cx="17" cy="49" r="1.2" fill="#fdc02f"/>
        <circle cx="65" cy="21" r="1.2" fill="#60dafc"/>
        <circle cx="81" cy="38" r="1.2" fill="#fd7852"/>
        <circle cx="70" cy="80" r="1.2" fill="#3be17d"/>
        <circle cx="40" cy="80" r="1.2" fill="#2992fd"/>
        <circle cx="21" cy="67" r="1.2" fill="#fdc02f"/>
      </svg>
      <div className="no-training-text">
        There are no training registrations.
      </div>
    </div>
  );
}

export default NoTrainingRegistrations;
