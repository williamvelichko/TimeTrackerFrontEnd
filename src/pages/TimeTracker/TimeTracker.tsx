import React from "react";
import CreateEntrie from "./components/CreateEntrie";
import ViewEntries from "./components/ViewEntries";

const TimeTracker = () => {
  return (
    <div className="container ">
      <div className="col">
        <div className="col">
          <CreateEntrie />
        </div>
        <div className="col">
          <ViewEntries />
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;
