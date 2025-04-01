import { useState } from "react";
import GradeStyle from '../components/styling/Grades.module.css';

function StudentGrades() {
  const [grades, setGrades] = useState([
    { assignment: "Math Homework", grade: "A", feedback: "Great work!" },
    { assignment: "Science Lab Report", grade: "B+", feedback: "Good effort!" },
    { assignment: "History Essay", grade: "A-", feedback: "Well written!" },
  ]);

  return (
    <div className={GradeStyle.grades-container}>
      <h2 className={GradeStyle.grades-title}>Grades</h2>
      <table className={GradeStyle.grades-table}>
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
  );
}

export default StudentGrades;
