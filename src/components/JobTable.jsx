
import { useState } from "react";
import JobActions from "./JobActions";

function JobTable({ jobs, onEditJob, onDeleteJob }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const statuses = [
    "All",
    "Saved",
    "Applied",
    "Interview",
    "Offer",
    "Rejected",
  ];

  // Search by job title or company and filter by status.
  const filteredJobs = jobs.filter((job) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="jobs-section" id="jobs">
      <h2>My Opportunities</h2>

      {/* Search and filter controls */}
      <div className="job-filters">
        <input
          type="search"
          className="job-search"
          placeholder="Search job title or company..."
          aria-label="Search job title or company"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          className="job-status-filter"
          aria-label="Filter jobs by status"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === "All" ? "All statuses" : status}
            </option>
          ))}
        </select>
      </div>

      <p className="job-results-count" aria-live="polite">
        Showing {filteredJobs.length} of {jobs.length} opportunities
      </p>

      {filteredJobs.length === 0 ? (
        <div className="empty-jobs-message">
          <h3>No opportunities found</h3>
          <p>
            Try another search or change the status filter.
          </p>
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
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>

                    <td>
                      <span className="status">{job.status}</span>
                    </td>

                    <td>{job.date}</td>

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
            {filteredJobs.map((job) => (
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
        </>
      )}
    </section>
  );
}

export default JobTable;
