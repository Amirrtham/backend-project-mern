import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {

  const fields = {
    Student: ["Name", "Age", "Course", "City"],

    Employee: [
      "Employee Name",
      "Employee ID",
      "Department",
      "Salary",
    ],

    Product: [
      "Product Name",
      "Price",
      "Category",
      "Brand",
    ],

    User: [
      "Username",
      "Email",
      "Password",
    ],

    Contact: [
      "Name",
      "Mobile Number",
      "Email",
    ],

    Course: [
      "Student Name",
      "Course Name",
      "Duration",
    ],

    Library: [
      "Book Name",
      "Author Name",
      "Price",
    ],

    Vehicle: [
      "Vehicle Number",
      "Owner Name",
      "Vehicle Type",
    ],

    Hospital: [
      "Patient Name",
      "Age",
      "Disease",
      "Doctor Name",
    ],

    Job: [
      "Candidate Name",
      "Email",
      "Skill",
      "Experience",
    ],
  };

  const [module, setModule] = useState("Student");

  const [records, setRecords] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(module)) || [];
    setRecords(data);
  }, [module]);

  const saveRecord = (obj) => {
    const newData = [...records, obj];

    setRecords(newData);

    localStorage.setItem(module, JSON.stringify(newData));
  };

  return (
    <div>

      <h1 align="center">
        React Management System
      </h1>

      <Navbar setModule={setModule} />

      <Form
        module={module}
        fields={fields[module]}
        saveRecord={saveRecord}
      />

      <Display
        module={module}
        fields={fields[module]}
        records={records}
      />

    </div>
  );
}

export default App;