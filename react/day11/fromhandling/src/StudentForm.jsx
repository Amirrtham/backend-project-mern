import { useState } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    city: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudents((prev) => [...prev, student]);

    setStudent({
      name: "",
      age: "",
      course: "",
      city: "",
    });
  };

  return (
    <div>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={student.name}
          onChange={handleChange}
        />

        <br /><br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={student.age}
          onChange={handleChange}
        />

        <br /><br />

        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          name="course"
          value={student.course}
          onChange={handleChange}
        />

        <br /><br />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={student.city}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <h2>Student Details</h2>

      {students.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Course: {item.course}</p>
          <p>City: {item.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;