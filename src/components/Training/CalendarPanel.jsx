import React from "react";
import "./calendarPanel.css";

function CalendarPanel({ month, year, events }) {
  const getDaysInMonth = (month, year) =>
    new Date(year, month, 0).getDate(); // month is 1-based

  const daysInMonth = getDaysInMonth(month, year);
  const startDay = new Date(year, month - 1, 1).getDay(); // Sunday=0, Monday=1,...

  // Layout for first day index (Monday start)
  const grid = [];
  let dayIdx = 1;

  for (let week = 0; week < 6; week++) {
    const weekRow = [];
    for (let day = 0; day < 7; day++) {
      const cellIdx = week * 7 + day;
      if (cellIdx >= startDay && dayIdx <= daysInMonth) {
        weekRow.push(dayIdx++);
      } else {
        weekRow.push(null);
      }
    }
    grid.push(weekRow);
  }

  const renderEvents = (date) => {
    const dayEvents = events.filter(ev => ev.date === date);
    return dayEvents.map(ev => (
      <div className="event" key={ev.id}>
        <span className="event-time">{ev.time}</span>
        <span className="event-title">{ev.title}</span>
        <div className="event-tags">
          {ev.tags.map(tag => (
            <span className={`event-tag ${tag}`}>{tag}</span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="calendar-panel">
      <div className="calendar-grid">
        {/* Weekday headers */}
        <div className="weekday-row">
          {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(day => (
            <div className="weekday">{day}</div>
          ))}
        </div>
        {/* Days rows */}
        {grid.map((weekRow, wi) => (
          <div className="week-row" key={wi}>
            {weekRow.map((date, di) => (
              <div className="day-cell" key={di}>
                {date && (
                  <>
                    <div className="date">{date}</div>
                    <div className="month-label">{month === 7 ? "July" : ""}</div>
                    {renderEvents(date)}
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarPanel;
