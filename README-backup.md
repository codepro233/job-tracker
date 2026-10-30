# JOB-TRACkER


A responsive job application tracker that helps job seekers organize opportunities, manage application progress, and keep track of their job search in one place.

## Overview

Job-Track is a frontend web application built with React. It provides a simple dashboard for recording job opportunities, updating application statuses, and finding saved applications quickly.

The application uses browser local storage to retain job records after refreshing the page.

## Features

- **Add opportunities:** Record job titles, company names, application statuses, and dates.
- **Edit opportunities:** Update existing job information.
- **Delete opportunities:** Remove opportunities you no longer need.
- **Search:** Find opportunities by job title or company name.
- **Filter by status:** View saved, applied, interview, offer, or rejected applications.
- **Dashboard statistics:** Track application progress as your records change.
- **Persistent storage:** Keep job records in the current browser using local storage.
- **Responsive interface:** Use a desktop table or mobile-friendly job cards.
- **Form validation:** Prevent incomplete entries and future dates.
- **Remote job listings:** Fetch remote opportunities from the Remotive public API.
- **Async data handling:** Display loading, error, retry, and empty states.
- **Remote job search:** Filter fetched opportunities by job title or company.
- **Original job links:** Visit the source listing on Remotive.

## Technologies

- React
- JavaScript
- HTML5
- CSS3
- Vite
- Browser Local Storage
- Git and GitHub
- Fetch API
- Remotive Public API
- Async/Await

## Getting Started

### Prerequisites

Install Node.js and npm, and make sure Git is available.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codepro233/job-tracker.git
   ```

2. Open the project directory:

   ```bash
            
           cd job-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal, usually:

   `http://localhost:5173`

## Project Structure

```text
Job-Tracker/
├── public/
│
├── src/
│   ├── assets/
│   │   └── hero.png
│   │
│   ├── components/
│   │   ├── DashboardHeader.jsx
│   │   ├── JobForm.jsx
│   │   ├── JobTable.jsx
│   │   ├── JobActions.jsx       # NEW
│   │   ├── RemoteJobs.jsx       # NEW
│   │   ├── Sidebar.jsx
│   │   └── StatsGrid.jsx
│   │
│   ├── App.jsx                  # UPDATED
│   ├── App.css                  # UPDATED
│   └── main.jsx
│
├── .gitignore                   # UPDATED
├── index.html
├── package.json
├── package-lock.json
├── README.md                    # UPDATED
└── vite.config.js
```
## Component Map

The Job Tracker application is built with reusable React components. The `App` component manages the main job data and passes information and callback functions to its child components through props.

```text
App
├── Sidebar
└── Main Content
    ├── DashboardHeader
    ├── JobForm (conditional)
    ├── StatsGrid
    └── JobTable
        └── JobActions
```
src/
├── components/
│   ├── DashboardHeader.jsx
│   ├── JobActions.jsx
│   ├── JobForm.jsx
│   ├── JobTable.jsx
│   ├── RemoteJobs.jsx
│   ├── Sidebar.jsx
│   └── StatsGrid.jsx
├── App.jsx
├── App.css
└── main.jsx

### Component responsibilities

| Component | Responsibility |
|---|---|
| `App.jsx` | Manages job data, form visibility, adding, editing, deleting, and localStorage persistence. Connects the dashboard components and passes data and functions through props. |
| `Sidebar.jsx` | Displays the application's navigation. |
| `DashboardHeader.jsx` | Displays the dashboard heading and the button for opening or closing the job form. |
| `JobForm.jsx` | Collects and validates job details, then passes submitted data to `App`. Supports adding new jobs and editing existing jobs if implemented. |
| `StatsGrid.jsx` | Calculates and displays job application statistics from the `jobs` prop. |
| `JobTable.jsx` | Displays saved job opportunities and provides search, status filtering, and desktop/mobile layouts. Uses `JobActions` for job actions. |
| `JobActions.jsx` | Provides reusable Edit and Delete buttons shared by the desktop table and mobile cards. Calls the appropriate callback functions passed through props. |
| `RemoteJobs.jsx` | Displays remote job opportunities separately from saved job applications. Handles remote listing presentation and related interactions according to its implementation. |


### Data flow and state management

- `App.jsx` owns the main `jobs` state because multiple components need access to the same job data.
- `App.jsx` passes `jobs` to `StatsGrid.jsx` and `JobTable.jsx` through props.
- `JobForm.jsx` receives `initialJob`, `onSave`, and `onCancel` props to support creating and editing job opportunities.
- `JobTable.jsx` passes each job and the edit/delete callback functions to `JobActions.jsx`.
- `JobActions.jsx` calls the supplied edit and delete callbacks when the user clicks the corresponding buttons.
- `JobTable.jsx` manages its own search term and status filter because those values are specific to the job list.
- `RemoteJobs.jsx` manages or displays remote job listings separately from saved job applications, according to its implementation. Any shared state or callbacks are passed through props as needed.
- `App.jsx` saves changes to job applications in browser `localStorage` so the data persists after a page refresh.
- Data flows from parent components to child components through props, while child components communicate user actions back to their parents through callback functions.


*The structure above describes the expected main files. Update it if your actual project differs.*

## Usage

1. Open  Job Tracker.
2. Add a job opportunity using the job form.
3. Enter the job title, company, status, and date.
4. Edit or delete an opportunity when necessary.
5. Search by job title or company.
6. Filter applications by status.
7. Refresh the page to verify that saved records remain available.

## Data Storage and Limitations

 Job Tracker currently stores job records in the browser's local storage.

- Records persist across page refreshes in the same browser.
- Data is not automatically synchronized between devices or browsers.
- Clearing the browser's site data can remove stored records.
- The application does not currently use a backend database or user authentication.

## Screenshots

Project screenshots are available in the repository. Add their relative paths here once confirmed.

Example:

```markdown
![ Job Tracker dashboard](./screenshots/dashboard.png)
```

## Project Goals

This project demonstrates practical frontend development skills, including:

- Building reusable React components
- Managing application state with React hooks
- Handling forms and user interactions
- Filtering and searching data
- Implementing responsive layouts
- Persisting data with local storage
- Documenting and preparing a project for deployment

## BuildLab — Week 1

**Submission focus:** Responsive, accessible interface and JavaScript interactivity.

--[x] Responsive desktop and mobile layouts
- [x] Add, edit, and delete opportunities
- [x] Search and status filtering
- [x] Dashboard statistics
- [x] Local storage persistence
- [x] Form validation
- [x] Live deployment
- [x] Final submission review
## Links

- **GitHub Repository:**(https://github.com/codepro233/job-tracker)
- **Live Demo:** (https://job-tracker-gilt-seven.vercel.app/)

## Future Improvements

- User authentication
- Backend database and cloud synchronization
- Export opportunities to CSV
- Application reminders and follow-up dates
- Advanced search and analytics

## License

This project is currently a learning project. Add a license if you intend to distribute or reuse it publicly.

## BuildLab — Week 2

**Focus:** Component-based development and API data integration.

### Task 2.1 — Component-based development
- [x] Build the interface using reusable React components.
- [x] Separate job actions into a reusable component.
- [x] Document component responsibilities and data flow.

### Task 2.2 — API data integration
- [x] Fetch remote job listings from the Remotive public API.
- [x] Handle asynchronous requests using `fetch` and `async/await`.
- [x] Display loading and error states with a retry option.
- [x] Handle empty results and searches with no matches.
- [x] Filter remote jobs by title or company.
- [x] Display responsive job cards and original listing links.
- [x] Keep remote listings separate from personal job records.

### Final verification

- [x] Run `npm run build` successfully.
- [x] Test remote job listings and search.
- [x] Verify loading, error, and empty-state handling.
- [x] Test personal job application search and status filtering.
- [x] Verify adding, editing, and deleting job applications.
- [x] Verify dashboard statistics and local storage persistence.
- [x] Verify desktop, tablet, and phone layouts.
- [x] Confirm the Vercel Preview deployment works.
- [x] Add the Week 2 issue log and document mentor feedback status.
- [x] Create and push the `week-2` Git tag.


## Week 2 — Issue Log

The following issues were encountered and resolved during development of the Job Tracker Stage 2 features.

| # | Issue | Options considered | Resolution |
|---|---|---|---|
| 1 | Incorrect import path for `JobActions` caused a Vite module resolution error. | Check the relative path and component filename. | Corrected the import path in `JobTable.jsx`. |
| 2 | Remote job listings did not appear on the existing deployed website. | Check the API, deployed version, and Git branch. | Pushed the Stage 2 changes and verified the Vercel Preview deployment. |
| 3 | The search field and surrounding layout needed better alignment. | Adjust the container and input CSS. | Updated the CSS and checked the layout at different viewport widths. |
| 4 | ESLint reported an unused error variable and a state update inside an effect. | Remove the unused variable and restructure the asynchronous request. | Refactored the fetch logic and retry handler; lint and production build passed. |
| 5 | A temporary delay used to inspect the loading state was no longer needed. | Keep the delay or remove it after testing. | Removed the temporary delay before the Stage 2 commit. |

## Week 2 — Mentor Feedback Response

**Status:** No mentor feedback received as of this update.

No mentor feedback changes could be made or evaluated yet. The project was tested independently against the Week 2 requirements. Any feedback received later will be reviewed and documented.
