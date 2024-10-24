import { Link, NavLink } from "react-router-dom";
import "./App.css";
import { Router } from "./router/router";

function App() {
  return (
    <div>
      <Link to="/">Top</Link>
      <Link to="/create">Create</Link>
      <Link to="/event">Event</Link>

      <Router />
    </div>
  );
}

export default App;
