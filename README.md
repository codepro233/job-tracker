# Job Tracker

A responsive React application for organising job applications, tracking application progress, and discovering remote job opportunities.

## Project Links

- **GitHub:** https://github.com/codepro233/job-tracker
- **Live Demo:** https://job-tracker-gilt-seven.vercel.app/

## Features

### Personal Job Applications
- Add, edit, and delete job opportunities.
- Search by job title or company.
- Filter applications by status.
- View dashboard statistics.
- Store job records in browser local storage.
- Validate required fields and application dates.

### Remote Job Listings
- Fetch remote opportunities from the Remotive public API.
- Search remote jobs by title or company.
- Handle loading, errors, retries, and empty results.
- Open original job listings.
- Keep remote listings separate from personal applications.

### Navigation and User Experience
- Dashboard and individual job detail pages.
- Save and manage favourite opportunities.
- Direct links to job details.
- Custom not-found page.
- Responsive desktop and mobile layouts.
- Keyboard-accessible navigation and form controls.

## Technology Stack

- React
- JavaScript
- React Router
- Vite
- HTML5 and CSS3
- Browser Local Storage
- Fetch API and async/await
- Remotive Public API
- Vitest
- React Testing Library
- Git and GitHub

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/codepro233/job-tracker.git
cd job-tracker
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint checks |
| `npm run test` | Run automated tests |
| `npm run preview` | Preview the production build |

## Project Structure

```text
job-tracker/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DashboardHeader.jsx
│   │   ├── JobActions.jsx
│   │   ├── JobForm.jsx
│   │   ├── JobTable.jsx
│   │   ├── RemoteJobs.jsx
│   │   ├── Sidebar.jsx
│   │   └── StatsGrid.jsx
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   ├── JobDetails.jsx
│   │   └── NotFound.jsx
│   ├── test/
│   │   └── setup.js
│   ├── __tests__/
│   │   └── App.test.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Application Architecture

`App.jsx` manages the main application state, including personal job records and favourite IDs. Data is passed to child components through props, while callback functions handle user actions.

| Component or Page | Responsibility |
|---|---|
| `App.jsx` | Manages job records, favourites, and application actions |
| `Sidebar.jsx` | Provides dashboard navigation |
| `DashboardHeader.jsx` | Displays the dashboard heading and add-job action |
| `JobForm.jsx` | Handles adding, editing, and validating job details |
| `StatsGrid.jsx` | Displays application statistics |
| `JobTable.jsx` | Displays personal applications, search, and status filters |
| `JobActions.jsx` | Provides reusable edit and delete actions |
| `RemoteJobs.jsx` | Fetches and displays remote job listings |
| `JobDetails.jsx` | Displays an individual job opportunity |
| `Favorites.jsx` | Displays saved favourite opportunities |
| `NotFound.jsx` | Displays the not-found page |

### Routes

| Route | Description |
|---|---|
| `/` | Dashboard |
| `/jobs/:id` | Individual job details |
| `/favorites` | Favourite opportunities |
| `*` | Not-found page |

## Data Storage and Limitations

The application uses browser local storage for personal job records and favourite IDs.

- Data remains available after refreshing the page in the same browser.
- Data is not synchronised between devices.
- Clearing browser site data can remove saved records.
- The application does not currently use a backend database or user authentication.
- Remote job listings depend on the availability of the Remotive public API.

## Testing and Accessibility

### Automated Tests

The project uses Vitest and React Testing Library.

Run the tests:

```bash
npm run test
```

The current test suite covers:

- Dashboard rendering.
- Searching job opportunities by company.
- Filtering applications by status.
- Favourite-button interaction.

**Latest recorded result:** 4 automated tests passed.

### Accessibility Checks

- Keyboard navigation tested manually.
- Form controls and buttons tested using the keyboard.
- Visible keyboard focus styles implemented.
- Latest recorded Lighthouse accessibility score: 96/100.

## BuildLab Progress

### Week 1 — Frontend Development

**Focus:** Responsive interface and core job-tracking functionality.

- [x] Build responsive dashboard.
- [x] Add, edit, and delete job opportunities.
- [x] Implement search and status filtering.
- [x] Display dashboard statistics.
- [x] Persist records using local storage.
- [x] Add form validation.
- [x] Deploy the application.

### Week 2 — Component Development and API Integration

**Focus:** Reusable components and external API integration.

- [x] Build reusable React components.
- [x] Create reusable job actions.
- [x] Integrate the Remotive public API.
- [x] Implement loading and error handling.
- [x] Add retry and empty-result handling.
- [x] Search remote job listings.
- [x] Keep remote listings separate from personal applications.
- [x] Verify personal job management and local storage.
- [x] Create and push the `week-2` Git tag.

### Week 2 — Issue Log

| Issue | Resolution |
|---|---|
| Incorrect JobActions import path | Corrected the import path. |
| Remote listings missing from deployment | Updated the deployed branch and verified the preview. |
| Search and layout alignment issues | Adjusted CSS and checked responsive layouts. |
| ESLint warnings | Refactored fetch logic and removed unused code. |
| Temporary loading delay | Removed after testing. |

**Mentor feedback:** No mentor feedback received as of the latest update.

### Week 3 — Routing, State, Testing, and Accessibility

**Focus:** Multi-page navigation, persistent favourites, automated testing, and accessibility.

- [x] Add React Router navigation.
- [x] Create individual job detail pages.
- [x] Add a favourites page.
- [x] Persist favourite IDs using local storage.
- [x] Add a custom not-found page.
- [x] Create automated tests with Vitest and React Testing Library.
- [x] Verify four automated tests pass.
- [x] Perform manual keyboard navigation checks.
- [x] Review Lighthouse accessibility results.
- [ ] Complete final production deployment verification.
- [ ] Create and push the `week-3` Git tag.
- [ ] Complete final submission review.

## Future Improvements

- User authentication.
- Backend database and cloud synchronisation.
- Export job applications to CSV.
- Application reminders and follow-up dates.
- Advanced search and analytics.

## License

This project is currently a learning project. No open-source licence has been added.