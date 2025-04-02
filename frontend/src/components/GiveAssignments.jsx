import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
<<<<<<< HEAD
import TeacherNavbar  from './TeacherNavbar.jsx';
=======
import Navbar from "./TeacherNavbar";
import assignStyles from "../components/styling/teacher/GiveAssignments.module.css";

// Convert YYYY-MM-DD to DD-MM-YYYY for display
const formatDateToDisplay = (dateStr) => {
  if (!dateStr) return "DD-MM-YYYY"; // Placeholder if no date selected
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
};

// Convert DD-MM-YYYY to YYYY-MM-DD for input field
const formatDateForInput = (dateStr) => {
  if (!dateStr || dateStr === "DD-MM-YYYY") return "";
  const [day, month, year] = dateStr.split("-");
  return `${year}-${month}-${day}`;
};

// Get today's date in YYYY-MM-DD format (for min attribute)
const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-based
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
>>>>>>> 29a1c15296cf809af01299adca97535fa9278cbe

function Assignments() {
  const { courseId } = useParams();
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Homework", dueDate: "05-04-2025", status: "Pending" },
    { id: 2, title: "Science Lab Report", dueDate: "10-04-2025", status: "Completed" },
  ]);

  const [newAssignment, setNewAssignment] = useState({ title: "", dueDate: "DD-MM-YYYY" });
  const [editing, setEditing] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddAssignment = () => {
    if (!newAssignment.title || newAssignment.dueDate === "DD-MM-YYYY") return;

    setAssignments([
      ...assignments,
      { 
        id: Date.now(), 
        title: newAssignment.title, 
        dueDate: newAssignment.dueDate, 
        status: "Pending" 
      },
    ]);
    setNewAssignment({ title: "", dueDate: "DD-MM-YYYY" });
  };

  const handleEditAssignment = (id) => {
    const edited = assignments.map((assignment) =>
      assignment.id === id
        ? { ...assignment, ...editing }
        : assignment
    );
    setAssignments(edited);
    setEditing(null);
  };

  const handleDeleteAssignment = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const filteredAssignments = assignments.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className={assignStyles.assignmentsContainer}>
        <h2>Assignments for Course ID: {courseId}</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search assignments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={assignStyles.searchInput}
        />

        {/* Add Assignment */}
        <div className={assignStyles.addAssignment}>
          <input
            type="text"
            placeholder="Assignment Title"
            value={newAssignment.title}
            onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
          />
          <input
            type="date"
            value={formatDateForInput(newAssignment.dueDate)}
            onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: formatDateToDisplay(e.target.value) })}
            min={getTodayDate()} // Restrict past dates
          />
          <button onClick={handleAddAssignment}>
            <FaPlus /> Add
          </button>
        </div>

        {/* Assignments Table */}
        <table className={assignStyles.assignmentsTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>
                  {editing?.id === assignment.id ? (
                    <input
                      type="text"
                      value={editing.title}
                      onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                    />
                  ) : (
                    assignment.title
                  )}
                </td>
                <td>
                  {editing?.id === assignment.id ? (
                    <input
                      type="date"
                      value={formatDateForInput(editing.dueDate)}
                      onChange={(e) => setEditing({ ...editing, dueDate: formatDateToDisplay(e.target.value) })}
                      min={getTodayDate()} // Restrict past dates
                    />
                  ) : (
                    assignment.dueDate
                  )}
                </td>
                <td>{assignment.status}</td>
                <td>
                  {editing?.id === assignment.id ? (
                    <button onClick={() => handleEditAssignment(assignment.id)}>Save</button>
                  ) : (
                    <FaEdit onClick={() => setEditing(assignment)} className={assignStyles.editIcon} />
                  )}
                  <FaTrash onClick={() => handleDeleteAssignment(assignment.id)} className={assignStyles.deleteIcon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Assignments;
