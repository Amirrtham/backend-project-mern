import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="container">

      <h1>Welcome to Dashboard</h1>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;