function Navbar({ setModule }) {
  return (
    <div className="navbar">
      <button onClick={() => setModule("Student")}>Student</button>

      <button onClick={() => setModule("Employee")}>Employee</button>

      <button onClick={() => setModule("Product")}>Product</button>

      <button onClick={() => setModule("User")}>User</button>

      <button onClick={() => setModule("Contact")}>Contact</button>

      <button onClick={() => setModule("Course")}>Course</button>

      <button onClick={() => setModule("Library")}>Library</button>

      <button onClick={() => setModule("Vehicle")}>Vehicle</button>

      <button onClick={() => setModule("Hospital")}>Hospital</button>

      <button onClick={() => setModule("Job")}>Job</button>
    </div>
  );
}

export default Navbar;