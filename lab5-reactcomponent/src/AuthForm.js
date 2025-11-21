import React, { useState } from "react";

function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password");
      return;
    }

    const newUser = {
      id: Date.now(),
      username,
      password
    };

    setUsers((prev) => [...prev, newUser]);
    setUsername("");
    setPassword("");
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>Authentication Form</h2>

      {/* Formulaire */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username : </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Liste des utilisateurs */}
      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthForm;
