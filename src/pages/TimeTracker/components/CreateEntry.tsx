// import React from "react";
// import "./../styles/TimeTracker.styles.scss";

// const CreateEntry = () => {
//   return (
//     <div className="createEntry container p-4">
//       <div className="row d-flex justify-content-evenly">
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label htmlFor="summary" className="form-label">
//               Summary
//             </label>
//             <input type="text" className="form-control" id="summary" />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label htmlFor="project" className="form-label">
//               Project
//             </label>
//             <input type="text" className="form-control" id="project" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             <label htmlFor="date" className="form-label">
//               Date
//             </label>
//             <input type="date" className="form-control" id="date" />
//           </div>
//           <div className="col-md-4 mb-3">
//             <label htmlFor="timeStart" className="form-label">
//               Time Start
//             </label>
//             <input type="time" className="form-control" id="timeStart" />
//           </div>
//           <div className="col-md-4 mb-3">
//             <label htmlFor="timeEnd" className="form-label">
//               Time End
//             </label>
//             <input type="time" className="form-control" id="timeEnd" />
//           </div>
//         </div>
//       </div>
//       <div className="col d-flex justify-content-center">
//         <button className="btn btn-create text-center">Add Time Entrie</button>
//       </div>
//     </div>
//   );
// };

// export default CreateEntry;

import React from "react";
import "./../styles/TimeTracker.styles.scss";

const CreateEntry = () => {
  return (
    <div className="create-entry">
      <form>
        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <input type="text" id="summary" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="project">Project</label>
          <input type="text" id="project" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="timeStart">Time Start</label>
          <input type="time" id="timeStart" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="timeEnd">Time End</label>
          <input type="time" id="timeEnd" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add Time Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEntry;
