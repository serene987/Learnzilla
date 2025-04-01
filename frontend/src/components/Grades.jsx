import { useState } from "react";
import GradeStyle from '../components/styling//student/Grades.module.css';

import StudentNavbar from './StudentNavbar.jsx'

function StudentGrades() {
  const [grades, setGrades] = useState([
    { assignment: "Math Homework", grade: "A", feedback: "Great work!" },
    { assignment: "Science Lab Report", grade: "B+", feedback: "Good effort!" },
    { assignment: "History Essay", grade: "A-", feedback: "Well written!" },
  ]);

  return (
    <>
    <StudentNavbar />
      <div className={GradeStyle.gradesContainer}>
        <h2 className={GradeStyle.gradesTitle}>Grades</h2>
        <table className={GradeStyle.gradesTable}>
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Grade</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((record, index) => (
              <tr key={index}>
                <td>{record.assignment}</td>
                <td>{record.grade}</td>
                <td>{record.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
          </>
  );
}

export default StudentGrades;
