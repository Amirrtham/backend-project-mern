import { useState, useEffect } from "react";

function App() {
  // Counter State
  const [count, setCount] = useState(0);

  // User State
  const [users, setUsers] = useState([]);

  // Task 2 - Console Update
  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  // Task 3 - Dynamic Page Title
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  // Task 4 - Fetch Users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  // Event Handling
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">

      <h1>React useEffect Tasks</h1>

      {/* Counter Section */}
      <div className="counter">

        <h2>Counter</h2>

        <h3>Count : {count}</h3>

        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>

      </div>

      <hr />

      {/* User Section */}
      <h2>Users List</h2>

      <div className="cards">

        {users.map((user) => (
          <div className="card" key={user.id}>

            <h3>{user.name}</h3>

            <p><b>Email:</b> {user.email}</p>

            <p><b>Phone:</b> {user.phone}</p>

            <p><b>Username:</b> {user.username}</p>

            <p><b>City:</b> {user.address.city}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;