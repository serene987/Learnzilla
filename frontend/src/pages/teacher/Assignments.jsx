import { useState } from "react";
import "./teacher.css";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Navbar from "./Navbar";

function Assignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Homework", dueDate: "2025-04-05", status: "Pending" },
    { id: 2, title: "Science Lab Report", dueDate: "2025-04-10", status: "Completed" },
  ]);

  const [newAssignment, setNewAssignment] = useState({ title: "", dueDate: "" });
  const [editing, setEditing] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddAssignment = () => {
    if (!newAssignment.title || !newAssignment.dueDate) return;
    setAssignments([...assignments, { id: Date.now(), ...newAssignment, status: "Pending" }]);
    setNewAssignment({ title: "", dueDate: "" });
  };

  const handleEditAssignment = (id) => {
    const edited = assignments.map((assignment) =>
      assignment.id === id ? { ...assignment, ...editing } : assignment
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
    <Navbar/>
        <div className="assignments-container">
          <h2>Manage Assignments</h2>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search assignments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            />

          {/* Add Assignment */}
          <div className="add-assignment">
            <input
              type="text"
              placeholder="Assignment Title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
              />
            <input
              type="date"
              value={newAssignment.dueDate}
              onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
              />
            <button onClick={handleAddAssignment}>
              <FaPlus /> Add
            </button>
          </div>

          {/* Assignments Table */}
          <table className="assignments-table">
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
                        value={editing.dueDate}
                        onChange={(e) => setEditing({ ...editing, dueDate: e.target.value })}
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
                      <FaEdit onClick={() => setEditing(assignment)} className="edit-icon" />
                    )}
                    <FaTrash onClick={() => handleDeleteAssignment(assignment.id)} className="delete-icon" />
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
