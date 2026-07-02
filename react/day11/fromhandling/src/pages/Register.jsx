import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUsers = [...users, user];

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <button>Register</button>

      </form>

      <button onClick={() => navigate("/login")}>
        Login
      </button>

      <h3>Registered Users</h3>

      {users.map((item, index) => (
        <div key={index} className="card">
          <p><b>Name:</b> {item.username}</p>
          <p><b>Email:</b> {item.email}</p>
          <p><b>Password:</b> {item.password}</p>
        </div>
      ))}

    </div>
  );
}

export default Register;