import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeForm() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    salary: "",
  });

  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployees((prev) => [...prev, employee]);

    setEmployee({
      employeeName: "",
      employeeId: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div>
      <h1>Employee Details Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          value={employee.employeeName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>

        <button
          type="button"
          onClick={() => navigate("/product")}
        >
          Next
        </button>
      </form>

      <h2>Employees</h2>

      {employees.map((item, index) => (
        <div key={index}>
          <p>Name: {item.employeeName}</p>
          <p>ID: {item.employeeId}</p>
          <p>Department: {item.department}</p>
          <p>Salary: {item.salary}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeForm;