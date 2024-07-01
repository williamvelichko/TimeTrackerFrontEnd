import React, { useState } from "react";
import { TimeEntry } from "./../types/types";
import "./../styles/TimeTracker.styles.scss";

const TimeCard: React.FC<{ time: TimeEntry }> = ({ time }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEdit = () => {
    alert("Edit functionality not implemented yet.");
  };

  const handleDelete = () => {
    alert("Delete functionality not implemented yet.");
  };

  return (
    <div
      className={`time-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <div className="time-card-header d-flex flex-column justify-content-between ">
        <div className="time-card-summary ">
          <p className="summary">{time.summary}</p>
        </div>
        <div className="d-flex justify-content-between time-card-time ">
          <p className="project m-0">{time.project}</p>
          <p className="total-time m-0">{time.totalTime}</p>
        </div>
      </div>

      {isExpanded && (
        <div className="time-card-details border-top border-dark pt-3">
          <p>
            <strong>Date:</strong> {time.date}
          </p>
          <p>
            <strong>Time Start:</strong> {time.timeStart}
          </p>
          <p>
            <strong>Time End:</strong> {time.timeEnd}
          </p>
          <div className="time-card-options">
            <button className="btn btn-secondary" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeCard;
