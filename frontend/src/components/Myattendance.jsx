import { useState } from "react";
import AttendanceStyle from '../components/styling/student/Attendance.module.css';

import StudentNavbar from './StudentNavbar.jsx'

function StudentAttendance() {
  const [attendance, setAttendance] = useState([
    { className: "Math", attendancePercentage: 90 },
    { className: "Science", attendancePercentage: 85 },
    { className: "English", attendancePercentage: 45 },
    { className: "History", attendancePercentage: 30 },
  ]);

  const getAttendanceClass = (percentage) => {
    if (percentage >= 75) return "attendance-success";
    if (percentage >= 40) return "attendance-warning";
    return "attendance-error";
  };

  return (
    <>
    <StudentNavbar/>
     <div className={AttendanceStyle.attendanceContainer}>
      <h2>Attendance</h2>
      <table className={AttendanceStyle.attendanceTable}>
        <thead>
          <tr>
            <th>Class</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index}>
              <td>{record.className}</td>
              <td className={getAttendanceClass(record.attendancePercentage)}>
                {record.attendancePercentage}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </>
  );
}

export default StudentAttendance;
