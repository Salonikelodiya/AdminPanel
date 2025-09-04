import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomYearPicker.css";
import Calender from "../../assets/Calender.svg";

function CustomYearPicker({ value, onChange }) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const inputRef = useRef(null);

  const handlePrev = () => onChange(value - 1);
  const handleNext = () => onChange(value + 1);
  const openCalendar = () => setCalendarOpen(true);
  const closeCalendar = () => setCalendarOpen(false);

  return (
    <div className="custom-year-picker-wrapper">
      <label className="custom-label">Select the date</label>
      <div style={{display:"flex" , flexDirection:"row" ,gap:20 , justifyContent:"center",alignContent:"center"}}>
         <div className="year-selector">
        <button className="arrow-btn" onClick={handlePrev} tabIndex={-1}>
          &#x2039;
        </button>
        <span className="year-value">{value}</span>
        <button className="arrow-btn" onClick={handleNext} tabIndex={-1}>
          &#x203A;
        </button>
      </div>
      <div className="calendar-icon-wrapper">
        {/* Use the Calender component directly if it's an SVG React component */}
        <img src={Calender} alt="calendar" onClick={openCalendar} style={{ height: 20, width: 20, cursor: "pointer" }} />

        <DatePicker
          selected={new Date(value, 0, 1)}
          onChange={(date) => {
            onChange(date.getFullYear());
            closeCalendar();
          }}
          showYearPicker={false} // Show full calendar popup
          open={calendarOpen}
          onClickOutside={closeCalendar}
          className="hidden-datepicker"
          ref={inputRef}
          dateFormat="yyyy-MM-dd"
          calendarStartDay={0}
         
        />
      </div>
      </div>
     
    </div>
  );
}

export default CustomYearPicker;



          