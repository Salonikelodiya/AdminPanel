import CustomYearPicker from "../inputs/CustomYearPicker"; 
import { useState } from "react";
import "./mytimesheet.css";

function MyTimeSheet(){
      const [date, setDate] = useState({ year: 2019, month: 7 });
      const handleYearChange = (newYear) => {
    setDate(prev => ({ ...prev, year: newYear }));
  };
    return (
        <div className="my-time-sheet">
       <h3>MyTimeSheet</h3>
       <div className="row-conatin">
        <div className="date-picker">
         <CustomYearPicker value={date.year} onChange={handleYearChange} />
        </div>
        <div className="btn-container">
            <button>My timesheet report</button>
        </div>
       </div>
        </div>
    )
}

export default MyTimeSheet;