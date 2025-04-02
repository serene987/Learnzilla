import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/TeacherNavbar";
import styles from "../../components/styling/teacher/ViewClass.module.css"; // Import CSS Module

function ViewClass() {
  const { courseId } = useParams();

  const [students, setStudents] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [grades, setGrades] = useState({});

  // General mock student data (10 students)
  const mockStudentData = [
    { id: 101, name: "Alice Johnson", email: "alice@example.com" },
    { id: 102, name: "Bob Smith", email: "bob@example.com" },
    { id: 103, name: "Charlie Davis", email: "charlie@example.com" },
    { id: 104, name: "Diana Lopez", email: "diana@example.com" },
    { id: 105, name: "Ethan Brown", email: "ethan@example.com" },
    { id: 106, name: "Fiona Green", email: "fiona@example.com" },
    { id: 107, name: "George White", email: "george@example.com" },
    { id: 108, name: "Hannah Black", email: "hannah@example.com" },
    { id: 109, name: "Isaac Taylor", email: "isaac@example.com" },
    { id: 110, name: "Julia King", email: "julia@example.com" },
  ];

  useEffect(() => {
    setStudents(mockStudentData);

    // Uncomment this to fetch from backend
    /*
    const fetchStudents = async () => {
      try {
        const response = await fetch(`https://your-api.com/courses/${courseId}/students`);
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
    */
  }, []);

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
      
      <div className={styles.viewClassContainer}>
         {/* Post Announcements */}
         {/* <div className={styles.announcementsSection}>
          <h3>Post Announcements</h3>
          <input
            type="text"
            placeholder="Write an announcement..."
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
            className={styles.announcementInput}
          />
          <button onClick={handleAddAnnouncement} className={styles.announcementButton}>
            <FaPlus /> Post
          </button>
          <ul className={styles.announcementsList}>
            {announcements.map((announcement, index) => (
              <li key={index} className={styles.announcementItem}>{announcement}</li>
            ))}
          </ul>
        </div> */}
        
        <h2>Class Details - Course ID: {courseId}</h2>

        {/* Enrolled Students */}
        <div className={styles.studentsSection}>
          <h3>Enrolled Students</h3>
          <table className={styles.studentsTable}>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
      </div>
    </>
  );
}

export default ViewClass;
