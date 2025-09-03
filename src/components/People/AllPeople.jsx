import   "./Allpeople.css";
import ActivePeopleList from "./ActivePeopleList";
import FilterSidebar from "./FilterSidebar";
import FilteredPeopleTable from "./FilteredPeopleTable";
import React, { useState , useMemo} from "react";
import { peopleData } from "./PeopleData";

 
function AllPeople(){
    const [filters, setFilters] = useState({
  regions: { UK: false, US: false, France: false },
  branches: { London: false, Liverpool: false, Manchester: false, Leeds: false, Cardiff: false },
  divisions: { Management: false, Finance: false, Legal: false, Operation: false, IT: false }
});
   // Filter people based on selected filters
  const filteredPeople = useMemo(() => {
    return peopleData.filter(person => {
      // Check region filter: include if none selected or if this person's region is selected
      const regionSelected = Object.values(filters.regions).some(Boolean);
      if (regionSelected && !filters.regions[person.region]) return false;

      // Check branch filter
      const branchSelected = Object.values(filters.branches).some(Boolean);
      if (branchSelected && !filters.branches[person.branch]) return false;

      // Check division filter
      const divisionSelected = Object.values(filters.divisions).some(Boolean);
      if (divisionSelected && !filters.divisions[person.division]) return false;

      return true;
    });
  }, [peopleData, filters]);

    return (
        <div className="All-people">
         
         <ActivePeopleList/>
        <div style={{display:"flex", gap:"22px" ,justifyContent:"space-between", height:600,overflowY:"auto", padding:"0 20px", }}>
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <FilteredPeopleTable people={filteredPeople}/>

        </div>
    
        </div>

    )
}
export default AllPeople;