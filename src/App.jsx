import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import DashboardLayout from './components/Project';
import "./App.css" // The merged layout with Sidebar, Header, Dashboard
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        {/* other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
