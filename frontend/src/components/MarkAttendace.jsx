import { useState } from "react";
import Navbar from "./TNavbar.jsx";
import Axios from "axios"; // Import Axios for API calls

import markStyles from './styling/teacher/Markattendance.module.css';

function AttendanceTable() {
  // State for students (all present by default)
  const [students, setStudents] = useState(
    Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      name: `Student ${index + 1}`,
      present: true,
    }))
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };  
  
  // State for selected date
  const [selectedDate, setSelectedDate] = useState("");

  // Handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Toggle attendance status
  const handleToggle = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  // Submit attendance to backend
  const handleSubmit = async () => {
    if (!selectedDate) {
      alert("Please select a date before submitting.");
      return;
    }

    try {
      await Axios.post("http://localhost:5000/api/attendance", {
        date: selectedDate,
        attendance: students.map(({ id, present }) => ({ id, present })),
      });
      alert("Attendance submitted successfully!");
    } catch (error) {
      console.error("Error submitting attendance:", error);
      alert("Failed to submit attendance.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={markStyles.attendance-container}>
        <h2>Attendance Marking</h2>

        {/* Date Picker */}
        <div className={markStyles.date-picker}>
          <label>Select Date: </label>
          <input
            type="date"
            max={new Date().toISOString().split("T")[0]} // Restricts future dates
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Display selected date */}
        {selectedDate && <p className={markStyles.selected-date}>Date: {formatDate(selectedDate)}</p>}

        {/* Attendance Table */}
        <table className={markStyles.attendance-table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={student.present}
                    onChange={() => handleToggle(student.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Submit Button */}
        <button className={markStyles.submit-button} onClick={handleSubmit}>
          Submit Attendance
        </button>
      </div>
    </>
  );
}

export default AttendanceTable;
