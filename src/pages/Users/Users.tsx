import React, { useState, useEffect } from "react";
import "./styles/Users.styles.scss";
import CreateUserForm from "./components/CreateUserForm";
import UsersObject from "../../data/Users.json";
interface User {
  name: string;
  email: string;
}

const ProjectsPage = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(UsersObject);
  }, []);

  const handleCreateUser = (user: User) => {
    setUsers([...users, user]);
    setShowCreateDialog(false);
  };

  const handleDeleteUser = (index: any) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Users</h1>

      {showCreateDialog ? (
        <CreateUserForm onCreateUser={handleCreateUser} />
      ) : (
        <button
          className="create-user-button btn"
          onClick={() => setShowCreateDialog(true)}
        >
          Create New User
        </button>
      )}

      <div className="table-responsive">
        {" "}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;
