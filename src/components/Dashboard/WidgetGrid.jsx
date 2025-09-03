import React from 'react';
import CompanyFactsWidget from './CompanyFactsWidget';
import StatisticsWidget from './StatisticsWidget';
import './WidgetGrid.css';

const WidgetGrid = () => (
   <div className="widget-container">
    {/* 80% area for cards */}
    <div className="widget-grid">
      <div className="widget-card">
        <CompanyFactsWidget />
      </div>

      <div className="widget-card">
        <StatisticsWidget />
      </div>

      <div className="widget-card">
        <h3>Assigned Risks</h3>
        <div className="widget-placeholder">There are no risks assigned.</div>
      </div>

      <div className="widget-card">
        <h3>Assigned Action Items</h3>
        <div className="widget-placeholder">There are no action items assigned.</div>
      </div>
    </div>

    {/* 20% area for Add Widget button */}
    <div className="add-widget-container">
      <button className="add-widget-btn">+ Add Widget</button>
    </div>
  </div>
);

export default WidgetGrid;
