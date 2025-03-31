// StudentGrades.jsx
import { useState } from "react";

function StudentGrades() {
  const [grades, setGrades] = useState([
    { assignment: "Math Homework", grade: "A", feedback: "Great work!" },
    { assignment: "Science Lab Report", grade: "B+", feedback: "Good effort!" },
  ]);

  return (
    <div>
      <h2>Grades</h2>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            {grade.assignment} - Grade: {grade.grade} - Feedback: {grade.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentGrades;