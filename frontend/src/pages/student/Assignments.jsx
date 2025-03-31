// StudentAssignments.jsx
import { useState } from "react";

function StudentAssignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Homework", dueDate: "2025-04-05", status: "Pending" },
    { id: 2, title: "Science Lab Report", dueDate: "2025-04-10", status: "Completed" },
  ]);

  const handleFileUpload = (assignmentId, event) => {
    console.log(`File uploaded for assignment ${assignmentId}:`, event.target.files[0]);
  };

  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            {assignment.title} - Due: {assignment.dueDate}
            <input type="file" onChange={(e) => handleFileUpload(assignment.id, e)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentAssignments;