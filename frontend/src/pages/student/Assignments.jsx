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
    <div className="assignments-container">
      <h2 className="assignments-title">Assignments</h2>
      <table className="assignments-table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Upload File</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.title}</td>
              <td>{assignment.dueDate}</td>
              <td className={assignment.status.toLowerCase()}>{assignment.status}</td>
              <td>
                <input
                  type="file"
                  className="file-upload"
                  onChange={(e) => handleFileUpload(assignment.id, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentAssignments;
