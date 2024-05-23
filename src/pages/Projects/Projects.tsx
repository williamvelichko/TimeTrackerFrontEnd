import React, { useState, useEffect } from "react";
import "./styles/Projects.styles.scss";
import ProjectsData from "../../data/Projects.json";
import CreateProjectForm from "./components/CreateProjectForm";

interface Project {
  name: string;
  totalHoursTracked: string;
}

const Projects: React.FC = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(ProjectsData);
  }, []);

  const handleCreateProject = (newProjectName: string) => {
    const newProject: Project = {
      name: newProjectName,
      totalHoursTracked: "00:00:00",
    };
    setProjects([...projects, newProject]);
    setShowCreateDialog(false);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      {showCreateDialog ? (
        <CreateProjectForm onCreateProject={handleCreateProject} />
      ) : (
        <button
          className="create-project-button btn mb-3"
          onClick={() => setShowCreateDialog(true)}
        >
          Create New Project
        </button>
      )}

      <table className="projects-table">
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
