
function JobActions({ job, onEditJob, onDeleteJob }) {
  return (
    <div className="job-actions">
      <button
        className="edit-button"
        type="button"
        onClick={() => onEditJob(job)}
      >
        Edit
      </button>

      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteJob(job.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default JobActions;
