import React, { useState, useEffect } from "react";
import TimeEntries from "../../../data/TimeEntries.json";
import TimeCard from "./TimeCard";
import "./../styles/TimeTracker.styles.scss";
import { TimeEntry } from "../types/types";

const ViewEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  useEffect(() => {
    setTimeEntries(TimeEntries);
  }, []);

  return (
    <div className="view-entries">
      {/* <h1 className="header">My Tasks</h1> */}
      <div className="entries-list">
        {timeEntries.map((time, index) => (
          <TimeCard key={index} time={time} />
        ))}
      </div>
    </div>
  );
};

export default ViewEntries;
