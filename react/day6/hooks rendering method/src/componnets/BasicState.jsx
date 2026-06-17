import { useState } from "react";

function BasicState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sudhan");
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(25000);
  const [course, setCourse] = useState("MERN");
  const [attendance, setAttendance] = useState(0);
  const [balance, setBalance] = useState(10000);
  const [mobile, setMobile] = useState(null);

  return (
    <>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h2>Name : {name}</h2>
      <button onClick={() => setName("Ravi")}>
        Change Name
      </button>

      <hr />

      <h2>Age : {age}</h2>
      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>

      <hr />

      <h2>Salary : ₹{salary}</h2>
      <button onClick={() => setSalary(salary + 5000)}>
        Increase Salary
      </button>

      <hr />

      <h2>Course : {course}</h2>
      <button
        onClick={() => setCourse("React Native")}
      >
        Change Course
      </button>

      <hr />

      <h2>Attendance : {attendance}</h2>
      <button
        onClick={() => setAttendance(attendance + 1)}
      >
        Present
      </button>

      <hr />

      <h2>Balance : ₹{balance}</h2>
      <button
        onClick={() => setBalance(balance + 1000)}
      >
        Deposit
      </button>

      <button
        onClick={() => setBalance(balance - 1000)}
      >
        Withdraw
      </button>

      <hr />

      <button onClick={() => setMobile(9876543210)}>
        Load Mobile
      </button>

      <h3>{mobile}</h3>

      <hr />
    </>
  );
}

export default BasicState;