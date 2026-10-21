
import { useCallback, useEffect, useState } from "react";

const JOBS_API = "https://remotive.com/api/remote-jobs?limit=10";
function RemoteJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");


const fetchJobs = useCallback(() => {
  return Promise.resolve()
    .then(() => fetch(JOBS_API))
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to load remote jobs.");
      }

      return response.json();
    })
    .then((data) => {
      if (!data || !Array.isArray(data.jobs)) {
        throw new Error("The API returned an unexpected response.");
      }

      setJobs(data.jobs);
    })
    .catch(() => {
      setError(
        "We couldn't load remote jobs. Check your connection and try again."
      );
    })
    .finally(() => {
      setLoading(false);
    });
}, []);


  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  function handleRetry() {
  setLoading(true);
  setError("");
  fetchJobs();
}

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    return (
      job.title?.toLowerCase().includes(searchText) ||
      job.company_name?.toLowerCase().includes(searchText)
    );
  });

  return (
    <section
  className="remote-jobs-section"
  aria-labelledby="remote-jobs-heading">
  <div className="remote-jobs-header">
    <h2 id="remote-jobs-heading">Remote Job Openings</h2>
    <p>Explore remote opportunities from Remotive.</p>
  </div>

<div className="remote-jobs-search">
  <label htmlFor="remote-job-search">Search remote jobs</label>
  <input
    id="remote-job-search"
    type="search"
    placeholder="Search title or company..."
    value={search}
    onChange={(event) => setSearch(event.target.value)}
  />
</div>

      {loading && (
  <p className="remote-jobs-message" role="status">
    Loading remote jobs...
  </p>
)}

      {!loading && error && (
  <div className="remote-jobs-message remote-jobs-error" role="alert">
    <p>{error}</p>
    <button
      className="remote-jobs-retry"
      type="button"
      onClick={handleRetry}
    >
      Retry
    </button>
  </div>
)}

      {!loading && !error && filteredJobs.length === 0 && (
  <p className="remote-jobs-message" role="status">
    {jobs.length === 0
      ? "No remote jobs are available right now."
      : "No jobs match your search."}
  </p>
)}

{!loading && !error && filteredJobs.length > 0 && (
  <ul className="remote-jobs-list">
    {filteredJobs.map((job) => (
      <li className="remote-job-card" key={job.id}>
        <h3>{job.title}</h3>
        <p className="remote-job-company">{job.company_name}</p>
        <p>
          Location: {job.candidate_required_location || "Not specified"}
        </p>
        <p>Salary: {job.salary || "Not disclosed"}</p>
        <a
          className="remote-job-link"
          href={job.url}
          target="_blank"
          rel="noreferrer"
        >
          View job on Remotive
        </a>
      </li>
    ))}
  </ul>
)}
    </section>
  );
}

export default RemoteJobs;
