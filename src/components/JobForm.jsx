
import { useState } from "react";

const validStatuses = [
  "Saved",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function JobForm({ initialJob, onSave, onCancel }) {
  const today = getToday();

  const [formData, setFormData] = useState(() => ({
    title: initialJob?.title ?? "",
    company: initialJob?.company ?? "",
    status: validStatuses.includes(initialJob?.status)
      ? initialJob.status
      : "Saved",
    date: initialJob?.date ?? today,
  }));

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = formData.title.trim();
    const company = formData.company.trim();

    if (!title || !company) {
      setError("Please enter both a job title and a company name.");
      return;
    }

    if (!validStatuses.includes(formData.status)) {
      setError("Please select a valid application status.");
      return;
    }

    if (!formData.date || formData.date > today) {
      setError("Date added cannot be in the future.");
      return;
    }

    onSave({
      title,
      company,
      status: formData.status,
      date: formData.date,
      id: initialJob?.id ?? Date.now(),
    });
  }

  return (
    <section className="form-section">
      <h2>
        {initialJob ? "Edit Opportunity" : "Add a Job Opportunity"}
      </h2>

      <form onSubmit={handleSubmit}>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <label htmlFor="title">Job Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. React Developer"
          autoComplete="organization-title"
          maxLength={100}
          required
        />

        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. BrightTech"
          autoComplete="organization"
          maxLength={100}
          required
        />

        <label htmlFor="status">Application Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          {validStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <label htmlFor="date">Date Added</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          max={today}
          required
        />

        <div className="form-actions">
          <button className="add-button" type="submit">
            {initialJob ? "Save Changes" : "Save Opportunity"}
          </button>

          <button
            className="cancel-button"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default JobForm;
