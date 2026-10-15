
function DashboardHeader({ onAddClick, showForm }) {
  return (
    <header className="page-header">
      <div>
        <h1>Dashboard</h1>
        <p>Keep track of your job search.</p>
      </div>

      <button className="add-button" onClick={onAddClick}>
        {showForm ? "Close Form" : "+ Add Opportunity"}
      </button>
    </header>
  );
}

export default DashboardHeader;
