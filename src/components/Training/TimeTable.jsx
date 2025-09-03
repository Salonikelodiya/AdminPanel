import "./TimeTable.css";
import FilterPanel from "./FilterPanel"
import CalendarPanel from "./CalendarPanel";
import { useState } from "react";

const allEvents = [
  { id: 1, date: 10, month: 7, year: 2019, time: "10:00", title: "Management in Parliament", tags: ["paris", "online"], branch: "Paris", field: "All", language: "All" },
  { id: 2, date: 25, month: 7, year: 2019, time: "10:00", title: "Qualification P.1", tags: ["paris"], branch: "Paris", field: "All", language: "All" },
  // More events here
];
function TimeTable(){
     const [filters, setFilters] = useState({ year: 2019, month: 7, branch: "Paris", field: "All", language: "All" });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filter events based on current filters
  const filteredEvents = allEvents.filter(event =>
    event.year === parseInt(filters.year) &&
    event.month === parseInt(filters.month) &&
    (filters.branch === "All" || event.branch === filters.branch) &&
    (filters.field === "All" || event.field === filters.field) &&
    (filters.language === "All" || event.language === filters.language)
  );
    return(
        <div className="TimeTable-content">
             
      <FilterPanel onFilterChange={handleFilterChange} />
      <CalendarPanel month={parseInt(filters.month)} year={parseInt(filters.year)} events={filteredEvents} />
    
        </div>
    );
}

export default TimeTable;