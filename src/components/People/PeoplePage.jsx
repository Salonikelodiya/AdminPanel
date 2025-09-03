import React, { useState, useMemo } from "react";
import FilterSidebar from "./FilterSidebar"; 
import FilteredPeopleTable from "./FilteredPeopleTable";
import { peopleData } from "./data";  // put your big dataset here

export default function PeoplePage() {
  const [filters, setFilters] = useState({
    regions: {},
    branches: {},
    divisions: {},
  });

  // Initialize filters dynamically based on data (all false initially)
  React.useEffect(() => {
    const counts = getFilterOptions(peopleData);
    setFilters({
      regions: Object.fromEntries(Object.keys(counts.regions).map(k => [k, false])),
      branches: Object.fromEntries(Object.keys(counts.branches).map(k => [k, false])),
      divisions: Object.fromEntries(Object.keys(counts.divisions).map(k => [k, false])),
    });
  }, []);

  // Filtering logic
  const filteredPeople = useMemo(() => {
    return peopleData.filter(p => {
      // Region match
      const regionActive = Object.values(filters.regions).some(v => v);
      const regionMatch = !regionActive || filters.regions[p.region];

      // Branch match
      const branchActive = Object.values(filters.branches).some(v => v);
      const branchMatch = !branchActive || filters.branches[p.branch];

      // Division match
      const divisionActive = Object.values(filters.divisions).some(v => v);
      const divisionMatch = !divisionActive || filters.divisions[p.division];

      return regionMatch && branchMatch && divisionMatch;
    });
  }, [filters]);

  // Dynamic counts (recompute based on *currently filtered people*)
  const filterCounts = useMemo(() => getFilterOptions(filteredPeople), [filteredPeople]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <FilterSidebar 
        filters={filters} 
        setFilters={setFilters} 
        counts={filterCounts} 
      />
      <FilteredPeopleTable people={filteredPeople} />
    </div>
  );
}

// Utility inside same file or extracted
function getFilterOptions(people) {
  const regionsCount = {};
  const branchesCount = {};
  const divisionsCount = {};

  people.forEach(({ region, branch, division }) => {
    regionsCount[region] = (regionsCount[region] || 0) + 1;
    branchesCount[branch] = (branchesCount[branch] || 0) + 1;
    divisionsCount[division] = (divisionsCount[division] || 0) + 1;
  });

  return { regions: regionsCount, branches: branchesCount, divisions: divisionsCount };
}
