import React from "react";
import "./../styles/TimeTracker.styles.scss";

interface TimeEntry {
  date: string;
  summary: string;
  project: string;
  totalTime: number;
  timeStart: any;
  timeEnd: any;
}

const TimeCard: React.FC<{ time: TimeEntry }> = ({ time }) => {
  return (
    <div className="card shadow p-4 mb-4 rounded">
      <div className="card-header bg-light border-bottom-0">
        <h5 className="card-title mb-0 font-weight-bold">{time.summary}</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <p className="mb-1 time-type">Project:</p>
            <p className="mb-0">{time.project}</p>
          </div>
          <div className="col-6">
            <p className="mb-1 time-type">Date:</p>
            <p className="mb-0">{time.date}</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <p className="mb-1 time-type">Time Start:</p>
            <p className="mb-0">{time.timeStart}</p>
          </div>
          <div className="col-6">
            <p className="mb-1 time-type">Time End:</p>
            <p className="mb-0">{time.timeEnd}</p>
          </div>
        </div>
      </div>
      <div className="card-footer bg-light d-flex justify-content-between align-items-center">
        <p className="mb-0 font-weight-bold">{time.totalTime} Hours</p>
        <div className="dropdown">
          <button
            className="options-btn btn btn-sm btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Options
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Edit
              </a>
            </li>
            <li>
              <a className="dropdown-item text-danger" href="#">
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
