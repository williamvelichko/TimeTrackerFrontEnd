import React from "react";
import "./../styles/TimeTracker.styles.scss";

const CreateEntrie = () => {
  return (
    <div className="createEntrie container p-4">
      <div className="row d-flex justify-content-evenly">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="summary" className="form-label">
              Summary
            </label>
            <input type="text" className="form-control" id="summary" />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="project" className="form-label">
              Project
            </label>
            <input type="text" className="form-control" id="project" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input type="date" className="form-control" id="date" />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="timeStart" className="form-label">
              Time Start
            </label>
            <input type="time" className="form-control" id="timeStart" />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="timeEnd" className="form-label">
              Time End
            </label>
            <input type="time" className="form-control" id="timeEnd" />
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <button className="btn btn-create text-center">Add Time Entrie</button>
      </div>
    </div>
  );
};

export default CreateEntrie;
