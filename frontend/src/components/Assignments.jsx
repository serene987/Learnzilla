import { useState } from "react";
import assignStyle from './styling/student/Assignment.module.css'

import StudentNavbar from './StudentNavbar.jsx'

function StudentAssignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Homework", dueDate: "2025-04-05", status: "Pending" },
    { id: 2, title: "Science Lab Report", dueDate: "2025-04-10", status: "Completed" },
  ]);

  const handleFileUpload = (assignmentId, event) => {
    console.log(`File uploaded for assignment ${assignmentId}:`, event.target.files[0]);
  };

  return (
    <>
    <StudentNavbar/>
    <div className={assignStyle.assignmentsContainer}>
      <h2 className={assignStyle.assignmentsTitle}>Assignments</h2>
      <table className={assignStyle.assignmentsTable}>
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
                  className={assignStyle.fileUpload}
                  onChange={(e) => handleFileUpload(assignment.id, e)}
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </>
  );
}

export default StudentAssignments;
