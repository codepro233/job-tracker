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

## Technologies

- React
- JavaScript
- HTML5
- CSS3
- Vite
- Browser Local Storage
- Git and GitHub

## Getting Started

### Prerequisites

Install Node.js and npm, and make sure Git is available.

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project directory:

   ```bash
   cd opportunity-track
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
opportunity-track/
├── public/
├── src/
│   ├── components/
│   │   ├── DashboardHeader.jsx
│   │   ├── JobForm.jsx
│   │   ├── JobTable.jsx
│   │   ├── Sidebar.jsx
│   │   └── StatsGrid.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

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

OpportunityTrack currently stores job records in the browser's local storage.

- Records persist across page refreshes in the same browser.
- Data is not automatically synchronized between devices or browsers.
- Clearing the browser's site data can remove stored records.
- The application does not currently use a backend database or user authentication.

## Screenshots

Project screenshots are available in the repository. Add their relative paths here once confirmed.

Example:

```markdown
![OpportunityTrack dashboard](./screenshots/dashboard.png)
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

- [x] Responsive desktop and mobile layouts
- [x] Add, edit, and delete opportunities
- [x] Search and status filtering
- [x] Dashboard statistics
- [x] Local storage persistence
- [x] Form validation
- [ ] Live deployment
- [ ] Final submission review

## Links

- **GitHub Repository:** YOUR_GITHUB_REPOSITORY_URL
- **Live Demo:** Add your deployed application URL here

## Future Improvements

- User authentication
- Backend database and cloud synchronization
- Export opportunities to CSV
- Application reminders and follow-up dates
- Advanced search and analytics

## License

This project is currently a learning project. Add a license if you intend to distribute or reuse it publicly.# job-tracker
