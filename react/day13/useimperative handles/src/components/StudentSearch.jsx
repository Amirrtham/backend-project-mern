import { useRef, useState } from "react";
import SearchBox from "./SearchBox";

function StudentSearch() {
  const searchRef = useRef();

  const students = [
    "Sudhan",
    "Sudhakar",
    "Arun",
    "Karthik",
    "Vignesh",
    "Rahul",
    "Suresh",
  ];

  const [result, setResult] = useState(students);

  const handleSearch = (value) => {
    const filteredStudents = students.filter((student) =>
      student.toLowerCase().includes(value.toLowerCase())
    );

    setResult(filteredStudents);
  };

  return (
    <div>
      <h2>Student Search</h2>

      <SearchBox
        ref={searchRef}
        placeholder="Search Student Name"
        onSearch={handleSearch}
      />

      <button
        onClick={() => searchRef.current.focusInput()}
      >
        Focus Search Box
      </button>

      <button
        onClick={() => searchRef.current.clearInput()}
      >
        Clear Search Box
      </button>

      <h3>Students</h3>

      {result.map((student, index) => (
        <div key={index} className="card">
          {student}
        </div>
      ))}
    </div>
  );
}

export default StudentSearch;