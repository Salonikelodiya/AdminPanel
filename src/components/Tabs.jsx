import React, { useState } from "react";
import "./Tabs.css";

export default function Tabs({ tabs, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="tabs-container">
      {/* Tabs Header */}
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : "deactive"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon && (
              <img
                src={activeTab === index ? tab.icon.active : tab.icon.deactive}
                alt={tab.label}
                className="tab-icon"
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {tabs[activeTab]?.component}
      </div>
    </div>
  );
}
