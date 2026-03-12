import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>

      <nav style={{ marginBottom: "30px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/feedback">All Feedback</Link>
      </nav>

      <Outlet />

    </div>
  );
}

export default App;