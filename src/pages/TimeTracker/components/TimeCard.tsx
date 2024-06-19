// import React from "react";
// import "./../styles/TimeTracker.styles.scss";

// interface TimeEntry {
//   date: string;
//   summary: string;
//   project: string;
//   totalTime: number;
//   timeStart: any;
//   timeEnd: any;
// }

// const TimeCard: React.FC<{ time: TimeEntry }> = ({ time }) => {
//   return (
//     <div className="card shadow p-4 mb-4 rounded">
//       <div className="card-header bg-light border-bottom-0">
//         <h5 className="card-title mb-0 font-weight-bold">{time.summary}</h5>
//       </div>
//       <div className="card-body">
//         <div className="row">
//           <div className="col-6">
//             <p className="mb-1 time-type">Project:</p>
//             <p className="mb-0">{time.project}</p>
//           </div>
//           <div className="col-6">
//             <p className="mb-1 time-type">Date:</p>
//             <p className="mb-0">{time.date}</p>
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-6">
//             <p className="mb-1 time-type">Time Start:</p>
//             <p className="mb-0">{time.timeStart}</p>
//           </div>
//           <div className="col-6">
//             <p className="mb-1 time-type">Time End:</p>
//             <p className="mb-0">{time.timeEnd}</p>
//           </div>
//         </div>
//       </div>
//       <div className="card-footer bg-light d-flex justify-content-between align-items-center">
//         <p className="mb-0 font-weight-bold">{time.totalTime} Hours</p>
//         <div className="dropdown">
//           <button
//             className="options-btn btn btn-sm btn-outline-secondary dropdown-toggle"
//             type="button"
//             id="dropdownMenuButton"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Options
//           </button>
//           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Edit
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item text-danger" href="#">
//                 Delete
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeCard;
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
