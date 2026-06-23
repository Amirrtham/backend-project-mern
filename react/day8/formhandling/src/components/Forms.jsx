import { useState } from "react";

function Forms() {
  const [studentName, setStudentName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [text, setText] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoginData({
      username,
      password,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Form Tasks</h1>

      <hr />

      <h2>1. Student Name Input</h2>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <p>Student Name: {studentName}</p>

      <hr />

      <h2>2. Employee Name Form</h2>
      <input
        type="text"
        placeholder="Enter Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <p>Employee Name: {employeeName}</p>

      <hr />

      <h2>3. Age Input</h2>
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>Age: {age}</p>

      <hr />

      <h2>4. Email Form</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Email: {email}</p>

      <hr />

      <h2>5. Mobile Number Form</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <p>Mobile Number: {mobile}</p>

      <hr />

      <h2>6. City Selection</h2>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <p>City: {city}</p>

      <hr />

      <h2>7. Course Registration</h2>
      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <p>Course: {course}</p>

      <hr />

      <h2>8. Live Character Counter</h2>
      <input
        type="text"
        placeholder="Type Something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Character Count: {text.length}</p>

      <hr />

      <h2>9. Uppercase Converter</h2>
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text.toUpperCase()}</p>

      <hr />

      <h2>10. Lowercase Converter</h2>
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text.toLowerCase()}</p>

      <hr />

      <h2>11. Full Name Form</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <p>
        Full Name: {firstName} {lastName}
      </p>

      <hr />

      <h2>12. Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Values</h3>
      <p>Username: {loginData.username}</p>
      <p>Password: {loginData.password}</p>

      <hr />

      <h2>Controlled Component</h2>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <p>{studentName}</p>

      <hr />

      <h2>Why Previous Value Shows After setState?</h2>
      <p>
        React updates state asynchronously. When setState() is called, React
        schedules a re-render. Therefore, if you print the state immediately
        after calling setState(), you may still see the previous value.
      </p>
    </div>
  );
}

export default Forms;