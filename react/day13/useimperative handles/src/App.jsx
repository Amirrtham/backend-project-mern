import { useState } from "react";
import StudentSearch from "./components/StudentSearch";
import ProductSearch from "./components/ProductSearch";

function App() {
  const [page, setPage] = useState("student");

  return (
    <div className="container">
      <h1>React useRef Tasks</h1>

      <div className="menu">
        <button onClick={() => setPage("student")}>
          Student Search
        </button>

        <button onClick={() => setPage("product")}>
          Product Search
        </button>
      </div>

      {page === "student" ? (
        <StudentSearch />
      ) : (
        <ProductSearch />
      )}
    </div>
  );
}

export default App;