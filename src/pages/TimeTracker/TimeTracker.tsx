import React from "react";
import CreateEntry from "./components/CreateEntry";
import ViewEntries from "./components/ViewEntries";

const TimeTracker = () => {
  return (
    <div className="container ">
      <div className="col">
        <div className="col">
          <CreateEntry />
        </div>
        <div className="col">
          <ViewEntries />
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;
