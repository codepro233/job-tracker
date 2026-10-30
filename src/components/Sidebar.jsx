
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Job Tracker</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <a href="#jobs">My Opportunities</a>
        <Link to="/favorites">Favourites</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
