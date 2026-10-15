
function StatsGrid({ jobs }) {
  const totalJobs = jobs.length;

  const applications = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interviews = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const offers = jobs.filter(
    (job) => job.status === "Offer"
  ).length;

  return (
    <section className="stats-grid">
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
    </section>
  );
}

export default StatsGrid;
