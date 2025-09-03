import React, { useState } from "react";
import "./CalendarMain.css";
import calendarSvg from "../../assets/Calender.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const monthsInfo = [
  { name: "January", working: 19, nonWorking: 8 },
  { name: "February", working: 20, nonWorking: 8 },
  { name: "March", working: 21, nonWorking: 10 },
  { name: "April", working: 22, nonWorking: 8 },
  { name: "May", working: 22, nonWorking: 9 },
  { name: "June", working: 20, nonWorking: 10 },
  { name: "July", working: 23, nonWorking: 8 },
  { name: "August", working: 22, nonWorking: 9 },

];

const daysInMonths = [
  31, 28, 31, 30, 31, 30, 31, 31, 
];

const nonWorkingDays = [
  [1,6,13,20,27],  // sample Sundays for January, etc.
  [3,10,17,24],    // each sub-array for a different month
  [2,9,16,23,30],
  [6,13,20,27],
  [4,11,18,25],
  [1,8,15,22,29],
  [6,13,20,27],
  [3,10,17,24,31]
];

// Array with weekdays headers
const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const CalendarMain = () => {
  const [branch, setBranch] = useState("Paris");
  const [selectedDay, setSelectedDay] = useState({month: 0, day: 22});
const [year, setYear] = useState(new Date().getFullYear());
const [isCalendarOpen, setCalendarOpen] = useState(false);
const [startDate, setStartDate] = useState(new Date(year, 0, 1)); // start with Jan 1 of chosen year

const handleYearChange = (newYear) => {
    setYear(newYear);
    setStartDate(new Date(newYear, 0, 1));
  };

const openCalendar = () => {
  setCalendarOpen(true);
};
  return (
    <div className="calendar-main">
      <h2 className="calendar-title">Time management</h2>
      <div className="calendar-controls">
        <div className="calendar-controls-top"> 
        <div className="calendar-branch">
          <label>Branch</label>
          <select value={branch} onChange={e => setBranch(e.target.value)}>
            <option>Paris</option>
            <option>London</option>
            <option>Berlin</option>
          </select>
        </div>
        <div className="calendar-date">
    <label>Select the date</label>
    <div className="calendar-date-controls">
    
        <button onClick={() => handleYearChange(year - 1)}>&lt;</button>
        <span>{year}</span>
        <button onClick={() => handleYearChange(year + 1)}>&gt;</button>

        <img
          src={calendarSvg}
          alt="Calendar icon"
          style={{ cursor: "pointer", width: 24, height: 24, marginLeft: 10 }}
          onClick={openCalendar}
        />
      </div>

      {isCalendarOpen && (
        <DatePicker
          key={year} // Remount to reset view on year change
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setCalendarOpen(false); // Close calendar on select
          }}
          showYearDropdown
          yearDropdownItemNumber={15}
          scrollableYearDropdown
          open={isCalendarOpen}
          onClickOutside={() => setCalendarOpen(false)}
        />
      )}
    </div>
        </div>
         <div className="calendar-summary">
        <div className="calendar-summary-box">
          <span className="calendar-summary-working">247</span>
          <span className="calendar-summary-label">working days</span>
        </div>
        <div className="calendar-summary-box">
          <span className="calendar-summary-nonworking">118</span>
          <span className="calendar-summary-label">non-working days</span>
        </div>
      </div>
      </div>
     
      <div className="calendar-grid">
        {monthsInfo.map((month, mi) => (
          <div className="calendar-month" key={month.name}>
            <div className="calendar-month-title">{month.name}</div>
            <div className="calendar-table">
              <div className="calendar-weekdays">
                {weekdays.map(wd => (
                  <span key={wd} className="calendar-weekday">{wd}</span>
                ))}
              </div>
              <div className="calendar-days">
                {[...Array(daysInMonths[mi])].map((_, di) => {
                  const dayNum = di + 1;
                  const isNonWorking = nonWorkingDays[mi].includes(dayNum);
                  const isSelected = selectedDay.month === mi && selectedDay.day === dayNum;

                  return (
                    <span
                      key={dayNum}
                      className={
                        "calendar-day" +
                        (isNonWorking ? " non-working" : "") +
                        (isSelected ? " selected" : "")
                      }
                      onClick={() => setSelectedDay({month: mi, day: dayNum})}
                    >
                      {dayNum}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="calendar-month-info">
              <span className="calendar-month-working">
                Working days: {month.working}
              </span>
              <span className="calendar-month-nonworking">
                Non-working days: {month.nonWorking}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarMain;
