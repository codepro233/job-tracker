
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404 — Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Return to Job Tracker</Link>
    </section>
  );
}

export default NotFound;
