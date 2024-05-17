import React, { useState } from "react";

interface User {
  name: string;
  email: string;
}

interface Props {
  onCreateUser: (user: User) => void;
}

const CreateUserForm: React.FC<Props> = ({ onCreateUser }) => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");

  const handleCreateUser = () => {
    if (newUserName.trim() !== "" && newUserEmail.trim() !== "") {
      onCreateUser({ name: newUserName, email: newUserEmail });
      setNewUserName("");
      setNewUserEmail("");
    }
  };

  return (
    <div>
      <h2>Create New User</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          className="form-control"
          placeholder="Enter name"
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          type="email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
          className="form-control"
          placeholder="Enter email address"
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleCreateUser}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateUserForm;
