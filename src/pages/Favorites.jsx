import { Link } from "react-router-dom";

function Favorites({ jobs, favoriteIds, onToggleFavorite }) {
  const favoriteJobs = jobs.filter((job) =>
    favoriteIds.includes(String(job.id))
  );

  return (
    <section className="favorites-page">
      <Link to="/">← Back to Dashboard</Link>

      <h1>My Favourite Opportunities</h1>
      <p>
        You have saved {favoriteJobs.length} favourite{" "}
        {favoriteJobs.length === 1 ? "opportunity" : "opportunities"}.
      </p>

      {favoriteJobs.length === 0 ? (
        <div className="empty-jobs-message">
          <h2>No favourites yet</h2>
          <p>
            Visit your dashboard and mark jobs as favourites to see them here.
          </p>
        </div>
      ) : (
        <div className="favorites-list">
          {favoriteJobs.map((job) => (
            <article className="mobile-job-card" key={job.id}>
              <h2>{job.title}</h2>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Status:</strong> {job.status}
              </p>
              <p>
                <strong>Date Added:</strong> {job.date}
              </p>

              <Link to={`/jobs/${job.id}`}>View Job Details</Link>

              <button
                type="button"
                className="favorite-button"
                onClick={() => onToggleFavorite(job.id)}
                aria-label={`Remove ${job.title} from favourites`}
              >
                ★ Remove Favourite
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;