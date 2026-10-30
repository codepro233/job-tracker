
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import StatsGrid from "./components/StatsGrid";
import JobForm from "./components/JobForm";
import JobTable from "./components/JobTable";
import RemoteJobs from "./components/RemoteJobs";
import JobDetails from "./pages/JobDetails";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";

const STORAGE_KEY = "jobTrackerJobs";

const initialJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "BrightTech",
    status: "Applied",
    date: "2026-10-08",
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "Nova Systems",
    status: "Saved",
    date: "2026-10-09",
  },
  {
    id: 3,
    title: "React Developer",
    company: "CloudWorks",
    status: "Interview",
    date: "2026-10-12",
  },
];

function loadJobs() {
  try {
    const savedJobs = localStorage.getItem(STORAGE_KEY);

    if (savedJobs !== null) {
      const parsedJobs = JSON.parse(savedJobs);

      if (Array.isArray(parsedJobs)) {
        return parsedJobs;
      }
    }
  } catch (error) {
    console.error("Could not load saved jobs:", error);
  }

  return initialJobs;
}

function App() {
  const jobFormRef = useRef(null);

  const [jobs, setJobs] = useState(loadJobs);

  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("jobTrackerFavorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Could not load saved favourites:", error);
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Save jobs whenever the jobs state changes.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
    } catch (error) {
      console.error("Could not save jobs:", error);
    }
  }, [jobs]);

  // Save favourites whenever the favourites state changes.
  useEffect(() => {
    try {
      localStorage.setItem(
        "jobTrackerFavorites",
        JSON.stringify(favoriteIds)
      );
    } catch (error) {
      console.error("Could not save favourites:", error);
    }
  }, [favoriteIds]);

  // Scroll to the form when editing an existing job.
  useEffect(() => {
    if (showForm && selectedJob) {
      jobFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showForm, selectedJob]);

  function handleAddClick() {
    setSelectedJob(null);
    setShowForm((previous) => !previous);
  }

  function handleEditJob(job) {
    setSelectedJob(job);
    setShowForm(true);
  }

  function handleSaveJob(savedJob) {
    if (selectedJob) {
      setJobs((previousJobs) =>
        previousJobs.map((job) =>
          job.id === savedJob.id ? savedJob : job
        )
      );
    } else {
      setJobs((previousJobs) => [savedJob, ...previousJobs]);
    }

    setSelectedJob(null);
    setShowForm(false);
  }

  function handleDeleteJob(jobId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this opportunity?"
    );

    if (!confirmed) return;

    setJobs((previousJobs) =>
      previousJobs.filter((job) => job.id !== jobId)
    );

    if (selectedJob?.id === jobId) {
      setSelectedJob(null);
      setShowForm(false);
    }
  }

  function handleCancelForm() {
    setSelectedJob(null);
    setShowForm(false);
  }

  function handleToggleFavorite(jobId) {
    const id = String(jobId);

    setFavoriteIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((favoriteId) => favoriteId !== id)
        : [...previousIds, id]
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Sidebar />

              <main className="main-content" id="dashboard">
                <DashboardHeader
                  showForm={showForm}
                  onAddClick={handleAddClick}
                />

                {showForm && (
                  <div ref={jobFormRef}>
                    <JobForm
                      key={selectedJob?.id ?? "new"}
                      initialJob={selectedJob}
                      onSave={handleSaveJob}
                      onCancel={handleCancelForm}
                    />
                  </div>
                )}

                <StatsGrid jobs={jobs} />

                <JobTable
                  jobs={jobs}
                  onEditJob={handleEditJob}
                  onDeleteJob={handleDeleteJob}
                  favoriteIds={favoriteIds}
                  onToggleFavorite={handleToggleFavorite}
                />

                <RemoteJobs />
              </main>
            </div>
          }
        />

        <Route
          path="/jobs/:id"
          element={<JobDetails jobs={jobs} />}
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              jobs={jobs}
              favoriteIds={favoriteIds}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
