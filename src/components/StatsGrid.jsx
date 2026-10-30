
function StatsGrid({ jobs }) {
  const totalJobs = jobs.length;

  const countByStatus = (status) =>
    jobs.filter((job) => job.status === status).length;

  const applications = countByStatus("Applied");
  const interviews = countByStatus("Interview");
  const offers = countByStatus("Offer");
  const rejected = countByStatus("Rejected");
  const saved = countByStatus("Saved");

  // Submitted applications exclude jobs that are only saved.
  const submittedApplications =
    applications + interviews + offers + rejected;

  const calculateRate = (count) =>
    submittedApplications === 0
      ? 0
      : Math.round((count / submittedApplications) * 100);

  const successRate = calculateRate(offers);
  const interviewRate = calculateRate(interviews);
  const rejectionRate = calculateRate(rejected);

  const statusBreakdown = [
    { label: "Saved", count: saved },
    { label: "Applied", count: applications },
    { label: "Interview", count: interviews },
    { label: "Offer", count: offers },
    { label: "Rejected", count: rejected },
  ];

  return (
    <section className="dashboard-analytics">
      <div className="stats-grid">
        <article className="stat-card">
          <p>Total Jobs</p>
          <h2>{totalJobs}</h2>
        </article>

        <article className="stat-card">
          <p>Applications</p>
          <h2>{applications}</h2>
        </article>

        <article className="stat-card">
          <p>Interviews</p>
          <h2>{interviews}</h2>
        </article>

        <article className="stat-card">
          <p>Offers</p>
          <h2>{offers}</h2>
        </article>
      </div>

      <section className="analytics-section">
        <h2>Application Performance</h2>

        <div className="analytics-rate-grid">
          <article className="analytics-card">
            <p>Success Rate</p>
            <h3>{successRate}%</h3>
            <span>Offers / Submitted applications</span>
          </article>

          <article className="analytics-card">
            <p>Interview Rate</p>
            <h3>{interviewRate}%</h3>
            <span>Interviews / Submitted applications</span>
          </article>

          <article className="analytics-card">
            <p>Rejection Rate</p>
            <h3>{rejectionRate}%</h3>
            <span>Rejections / Submitted applications</span>
          </article>
        </div>
      </section>

      <section className="analytics-section">
        <h2>Application Status Breakdown</h2>

        <div className="status-breakdown">
          {statusBreakdown.map((item) => {
            const percentage =
              totalJobs === 0
                ? 0
                : Math.round((item.count / totalJobs) * 100);

            return (
              <div className="status-breakdown-item" key={item.label}>
                <div className="status-breakdown-header">
                  <span>{item.label}</span>
                  <strong>{item.count} ({percentage}%)</strong>
                </div>

                <div
                  className="status-progress-track"
                  role="progressbar"
                  aria-label={`${item.label} jobs`}
                  aria-valuenow={percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className={`status-progress-fill status-${item.label.toLowerCase()}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default StatsGrid;
