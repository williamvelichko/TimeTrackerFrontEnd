import React, { useState } from "react";
import "../styles/Users.styles.scss";

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
    <div className="create-user-dialog">
      <input
        id="name"
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        className="form-control"
        placeholder="Enter name"
      />

      <input
        id="email"
        type="email"
        value={newUserEmail}
        onChange={(e) => setNewUserEmail(e.target.value)}
        className="form-control"
        placeholder="Enter email address"
      />

      <div>
        <button className="create-button btn" onClick={handleCreateUser}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateUserForm;
