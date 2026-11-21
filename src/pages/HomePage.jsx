export default function HomePage({ studentCount }) {
  // studentCount arrives from App as a prop and keeps the summary up to date.
  return (
    <main className="page">
      <section className="hero">
        <p>STUDENT MANAGEMENT</p>

        <h1>Keep your student records in one place.</h1>

        <p>
          Add, view, update, and remove student details with this simple app.
        </p>

        <div className="hero-actions">
          <a href="/students">View students</a>
          <a href="/add-student">Add a student</a>
        </div>
      </section>

      <section className="student-summary">
        <p>Students registered</p>
        <h2>{studentCount}</h2>
      </section>
    </main>
  );
}