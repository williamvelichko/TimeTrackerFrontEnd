// import React from "react";
// import CreateEntry from "./components/CreateEntry";
// import ViewEntries from "./components/ViewEntries";

// const TimeTracker = () => {
//   return (
//     <div className="container ">
//       <div className="col">
//         <div className="col">
//           <CreateEntry />
//         </div>
//         <div className="col">
//           <ViewEntries />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeTracker;

import React from "react";
import CreateEntry from "./components/CreateEntry";
import ViewEntries from "./components/ViewEntries";
import "./styles/TimeTracker.styles.scss";

const TimeTracker = () => {
  return (
    <div className="time-tracker">
      <div className="left-panel">
        <CreateEntry />
      </div>
      <div className="right-panel">
        <ViewEntries />
      </div>
    </div>
  );
};

export default TimeTracker;
