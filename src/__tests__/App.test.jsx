
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import JobTable from "../components/JobTable";

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "BrightTech",
    status: "Applied",
    date: "2026-10-08",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Nova Systems",
    status: "Saved",
    date: "2026-10-09",
  },
];

describe("Job Tracker application", () => {
  it("renders the dashboard heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /job tracker/i })
    ).toBeInTheDocument();
  });
});

describe("JobTable search and filtering", () => {
  const renderJobTable = () =>
    render(
      <JobTable
        jobs={sampleJobs}
        onEditJob={vi.fn()}
        onDeleteJob={vi.fn()}
        favoriteIds={[]}
        onToggleFavorite={vi.fn()}
      />
    );

  it("searches jobs by company", async () => {
    const user = userEvent.setup();
    renderJobTable();

    await user.type(
      screen.getByRole("searchbox", {
        name: /search job title or company/i,
      }),
      "BrightTech"
    );

    expect(screen.getAllByText("Frontend Developer").length).toBeGreaterThan(0);
    expect(screen.queryByText("Backend Developer")).not.toBeInTheDocument();
  });

  it("filters jobs by status", async () => {
    const user = userEvent.setup();
    renderJobTable();

    await user.selectOptions(
      screen.getByRole("combobox", { name: /filter jobs by status/i }),
      "Applied"
    );

    expect(screen.getAllByText("Frontend Developer").length).toBeGreaterThan(0);
    expect(screen.queryByText("Backend Developer")).not.toBeInTheDocument();
  });
  it("toggles a job favourite when clicked", async () => {
  const user = userEvent.setup();
  const onToggleFavorite = vi.fn();

  render(
    <JobTable
      jobs={sampleJobs}
      onEditJob={vi.fn()}
      onDeleteJob={vi.fn()}
      favoriteIds={[]}
      onToggleFavorite={onToggleFavorite}
    />
  );

  await user.click(
    screen.getAllByRole("button", { name: /add frontend developer to favourites/i })[0]
  );

  expect(onToggleFavorite).toHaveBeenCalledWith(1);
});
});
