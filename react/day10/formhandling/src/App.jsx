import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "",
    age: "",
    email: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, user]);

    setUser({
      username: "",
      age: "",
      email: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={user.username}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={user.age}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <h2>Stored Users</h2>

      {users.map((item, index) => (
        <div key={index}>
          <p>Username: {item.username}</p>
          <p>Age: {item.age}</p>
          <p>Email: {item.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;