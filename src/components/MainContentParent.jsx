import React from 'react';
import Dashboard from './Dashboard/WidgetGrid';
import People from './People/PeopleMainContent';
 import Projects from "./Projects/ProjectFilterForm";
 import Calender from './Calander/CalendarMain'
 import Training from "./Training/TrainingMain"
// import other components similarly

const MainContentParent = ({ selected }) => {
  switch (selected) {
    case 'Dashboard':
      return <Dashboard />;
    case 'People':
      return <People />;
     case 'Projects':
      return < Projects/>;
    // add other cases for your other sidebar items
    case 'Calendar':
      return < Calender/>;
    case 'Training':
      return < Training/>;  
    default:
      return (
        <div className="section-placeholder" style={{ padding: '20px'  }}>
          <h2>{selected}</h2>
          <p>Content for {selected} goes here.</p>
        </div>
      );
  }
};


export default MainContentParent;
