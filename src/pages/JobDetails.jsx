
import { Link, useParams } from "react-router-dom";

function JobDetails({ jobs }) {
  const { id } = useParams();

  const job = jobs.find((item) => String(item.id) === id);

  if (!job) {
    return (
      <section className="job-details">
        <h2>Job Opportunity Not Found</h2>
        <p>This job may have been deleted or the link is invalid.</p>
        <Link to="/">Back to Dashboard</Link>
      </section>
    );
  }

  return (
    <section className="job-details">
      <Link to="/">← Back to Dashboard</Link>

      <h1>{job.title}</h1>

      <div className="job-details-card">
        <p>
          <strong>Company:</strong> {job.company}
        </p>
        <p>
          <strong>Status:</strong> {job.status}
        </p>
        <p>
          <strong>Application Date:</strong> {job.date}
        </p>
      </div>
    </section>
  );
}

export default JobDetails;
