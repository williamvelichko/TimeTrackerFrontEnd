import React, { useState } from "react";
import "../styles/Projects.styles.scss";

interface CreateProjectFormProps {
  onCreateProject: (newProjectName: string) => void;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
  onCreateProject,
}) => {
  const [newProjectName, setNewProjectName] = useState("");

  const handleCreateProject = () => {
    if (newProjectName.trim() !== "") {
      onCreateProject(newProjectName);
      setNewProjectName("");
    }
  };

  return (
    <div className="create-project-dialog mb-3">
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Enter project name"
        value={newProjectName}
        onChange={(e) => setNewProjectName(e.target.value)}
      />
      <button className="create-button btn" onClick={handleCreateProject}>
        Create
      </button>
    </div>
  );
};

export default CreateProjectForm;
