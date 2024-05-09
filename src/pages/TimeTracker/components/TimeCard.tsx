import React from "react";
import "./../styles/TimeTracker.styles.scss";

interface TimeEntry {
  date: string;
  summary: string;
  project: string;
  totalTime: number;
}

const TimeCard: React.FC<{ time: TimeEntry }> = ({ time }) => {
  return (
    <div className="card row border m-4 ">
      <div className="row ">
        <div className="col ">
          <label className="time-label">Date</label>
          <p>{time.date}</p>
        </div>
        <div className="col ">
          <label className="time-label">Summary</label>
          <p>{time.summary}</p>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <label className="time-label">Project</label>
          <p>{time.project}</p>
        </div>
        <div className="col ">
          <label className="time-label">TotalTime</label>
          <p>{time.totalTime} Hours</p>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
