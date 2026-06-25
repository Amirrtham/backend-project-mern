import { Routes, Route } from "react-router-dom";
import StudentForm from "./StudentForm";
import EmployeeForm from "./EmployeeForm";
import ProductForm from "./ProductForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentForm />} />
      <Route path="/employee" element={<EmployeeForm />} />
      <Route path="/product" element={<ProductForm />} />
    </Routes>
  );
}

export default App;