export function UserCard({ name, role }) {
  return (
    <>
      <h3>Name: {name}</h3>
      <h3>Role: {role}</h3>
    </>
  );
}

export function MessageComponent({ text }) {
  return <h3>{text}</h3>;
}

export function CounterDisplay({ count, increment, decrement }) {
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export function Dashboard() {
  return <h3>Dashboard</h3>;
}

export function DisplayComponent({ numbers, color }) {
  return (
    <>
      {numbers.map((num) => (
        <h3 key={num} style={{ color }}>
          {num}
        </h3>
      ))}
    </>
  );
}

export function StudentList() {
  const students = ["Arun", "Kumar", "Priya", "Rahul"];

  return (
    <>
      {students.map((student, index) => (
        <h3 key={index}>{student}</h3>
      ))}
    </>
  );
}