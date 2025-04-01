import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Navbar from "../../components/TNavbar";
import Assignments from "../../components/GiveAssignments";

function ViewClass() {
  const { courseId } = useParams();
  
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const [grades, setGrades] = useState({});
  
  const handleAddAnnouncement = () => {
    if (!newAnnouncement) return;
    setAnnouncements([...announcements, newAnnouncement]);
    setNewAnnouncement("");
  };

  const handleGradeChange = (id, grade) => {
    setGrades({ ...grades, [id]: grade });
  };

  return (
    <>
      <Navbar />
      <Assignments/>
      <div className="viewclass-container">
        <h2>Class Details - Course ID: {courseId}</h2>

        {/* Grade Submissions */}
        <div className="grading-section">
          <h3>Grade Submissions</h3>
          <table>
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.title}</td>
                  <td>
                    <input
                      type="text"
                      value={grades[assignment.id] || ""}
                      onChange={(e) => handleGradeChange(assignment.id, e.target.value)}
                      placeholder="Enter Grade"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Post Announcements */}
        <div className="announcements-section">
          <h3>Post Announcements</h3>
          <input
            type="text"
            placeholder="Write an announcement..."
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
          />
          <button onClick={handleAddAnnouncement}><FaPlus /> Post</button>
          <ul>
            {announcements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ViewClass;