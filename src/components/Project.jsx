import React, { useState } from 'react';
import './Project.css';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContentParent from './MainContentParent';

function Project() {
  const [selected, setSelected] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="dashboard-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className={`dashboard-body ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar selected={selected} setSelected={setSelected} />
        <MainContentParent selected={selected} />
      </div>
    </div>
  );
}

export default Project;
