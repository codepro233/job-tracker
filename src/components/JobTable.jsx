
import { useState } from "react";
import JobActions from "./JobActions";

const JOBS_PER_PAGE = 5;

function JobTable({
  jobs,
  onEditJob,
  onDeleteJob,
  favoriteIds,
  onToggleFavorite,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const statuses = [
    "All",
    "Saved",
    "Applied",
    "Interview",
    "Offer",
    "Rejected",
  ];

  // Search and filter jobs.
  const filteredJobs = jobs.filter((job) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate pagination.
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  // Keep the displayed page valid when jobs are deleted.
  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const startIndex = (safeCurrentPage - 1) * JOBS_PER_PAGE;

  const currentJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE
  );

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function renderFavoriteButton(job) {
    const isFavorite = favoriteIds.includes(String(job.id));

    return (
      <button
        type="button"
        className="favorite-button"
        aria-label={
          isFavorite
            ? `Remove ${job.title} from favourites`
            : `Add ${job.title} to favourites`
        }
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(job.id)}
      >
        {isFavorite ? "★ Saved" : "☆ Favourite"}
      </button>
    );
  }

  function renderPagination() {
    if (totalPages <= 1) return null;

    return (
      <nav className="pagination" aria-label="Job application pages">
        <button
          type="button"
          className="pagination-button"
          onClick={() => handlePageChange(safeCurrentPage - 1)}
          disabled={safeCurrentPage === 1}
        >
          Previous
        </button>

        <div className="pagination-numbers">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                className={`pagination-button ${
                  safeCurrentPage === page ? "active" : ""
                }`}
                aria-label={`Page ${page}`}
                aria-current={
                  safeCurrentPage === page ? "page" : undefined
                }
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="pagination-button"
          onClick={() => handlePageChange(safeCurrentPage + 1)}
          disabled={safeCurrentPage === totalPages}
        >
          Next
        </button>
      </nav>
    );
  }

  const firstVisible =
    filteredJobs.length === 0 ? 0 : startIndex + 1;

  const lastVisible = Math.min(
    startIndex + JOBS_PER_PAGE,
    filteredJobs.length
  );

  return (
    <section className="jobs-section" id="jobs">
      <h2>My Opportunities</h2>

      <div className="job-filters">
        <input
          type="search"
          className="job-search"
          placeholder="Search job title or company..."
          aria-label="Search job title or company"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="job-status-filter"
          aria-label="Filter jobs by status"
          value={statusFilter}
          onChange={(event) => {
            setStatusFilter(event.target.value);
            setCurrentPage(1);
          }}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === "All" ? "All statuses" : status}
            </option>
          ))}
        </select>
      </div>

      <p className="job-results-count" aria-live="polite">
        Showing {firstVisible}–{lastVisible} of {filteredJobs.length} filtered
        opportunities ({jobs.length} total)
      </p>

      {filteredJobs.length === 0 ? (
        <div className="empty-jobs-message">
          <h3>No opportunities found</h3>
          <p>Try another search or change the status filter.</p>
        </div>
      ) : (
        <>
          {/* Desktop: full table */}
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Date Added</th>
                  <th>Favourite</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentJobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>
                      <span className="status">{job.status}</span>
                    </td>
                    <td>{job.date}</td>
                    <td>{renderFavoriteButton(job)}</td>
                    <td>
                      <div className="job-actions">
                        <JobActions
                          job={job}
                          onEditJob={onEditJob}
                          onDeleteJob={onDeleteJob}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tablet and phone: responsive job cards */}
          <div className="mobile-job-list">
            {currentJobs.map((job) => (
              <article className="mobile-job-card" key={job.id}>
                <h3>{job.title}</h3>

                <p>
                  <strong>Company:</strong> {job.company}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span className="status">{job.status}</span>
                </p>

                <p>
                  <strong>Date Added:</strong> {job.date}
                </p>

                {renderFavoriteButton(job)}

                <div className="job-actions">
                  <JobActions
                    job={job}
                    onEditJob={onEditJob}
                    onDeleteJob={onDeleteJob}
                  />
                </div>
              </article>
            ))}
          </div>

          {renderPagination()}
        </>
      )}
    </section>
  );
}

export default JobTable;
