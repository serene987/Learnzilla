import { useState } from "react";
import "./teacher.css";

function Myclasses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredClasses = classesData
    .filter((cls) =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "students") return b.students - a.students;
      return 0;
    });


    return (
    <div className="my-classes-container">
      <h1>My Classes</h1>
      <div className="search-sort">
        <input
          type="text"
          placeholder="Search by course name or code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Course Name (A-Z)</option>
          <option value="students">Students (High - Low)</option>
        </select>
      </div>
      <div className="classes-grid">
        {filteredClasses.map((cls) => (
          <div key={cls.id} className="class-card">
            <h2>📘 {cls.name}</h2>
            <p>🏷️ Code: {cls.code}</p>
            <p>👥 Students: {cls.students}</p>
            <p>📅 Schedule: {cls.schedule}</p>
            <div className="card-actions">
              <button className="view-btn">View Class</button>
              <button className="attendance-btn">Mark Attendance</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myclasses;