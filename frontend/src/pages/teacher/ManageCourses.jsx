import { useNavigate } from "react-router-dom";
import "./teacher.css";
import Navbar from "./Navbar";
function ManageCourses() {
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: "Math 101", students: 30, schedule: "Mon & Wed, 10:00 AM" },
    { id: 2, name: "Physics 202", students: 25, schedule: "Tue & Thu, 2:00 PM" },
  ];

  return (
    <>
    <Navbar/>
      <div className="courses-container">
        <h2>Manage Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.name}</h3>
              <p><strong>Students:</strong> {course.students}</p>
              <p><strong>Schedule:</strong> {course.schedule}</p>
              <div className="course-actions">
                <button onClick={() => navigate(`/markattendance`)}>Mark Attendance</button>
                <button onClick={() => navigate(`/class/${course.id}`)}>View Class</button>
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
  );
}

export default ManageCourses;
