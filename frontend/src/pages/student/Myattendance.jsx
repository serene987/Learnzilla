
// StudentAttendance.jsx
import { useState } from "react";

function StudentAttendance() {
  const [attendance, setAttendance] = useState([
    { date: "2025-03-30", status: "Present" },
    { date: "2025-03-29", status: "Absent" },
  ]);

  return (
    <div>
      <h2>Attendance</h2>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            {record.date} - Status: {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentAttendance;