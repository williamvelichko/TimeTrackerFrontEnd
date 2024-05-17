import React, { useState, useEffect } from "react";
import "./styles/Projects.styles.scss";
import ProjectsData from "../../data/Projects.json";

interface Project {
  name: string;
  totalHoursTracked: string;
}

const Projects: React.FC = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProjectName, setNewProjectName] = useState("");

  useEffect(() => {
    setProjects(ProjectsData);
  }, []);

  const handleCreateProject = () => {
    if (newProjectName.trim() !== "") {
      const newProject: Project = {
        name: newProjectName,
        totalHoursTracked: "00:00:00",
      };
      setProjects([...projects, newProject]);
      setNewProjectName("");
      setShowCreateDialog(false);
    }
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <button
        className="create-project-btn btn mb-3"
        onClick={() => setShowCreateDialog(true)}
      >
        Create New Project
      </button>

      {showCreateDialog && (
        <div className="create-project-dialog mb-3">
          <input
            type="text"
            className="form-control mr-2"
            placeholder="Enter project name"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleCreateProject}>
            Create
          </button>
        </div>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total hours tracked</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.totalHoursTracked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
