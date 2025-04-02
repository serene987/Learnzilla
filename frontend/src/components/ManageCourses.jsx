import { useNavigate } from "react-router-dom";
import Navbar from "./TeacherNavbar.jsx";
import manageStyles from './styling/teacher/Manage.module.css';

import {courseData} from './CourseData.jsx';
function ManageCourses() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
      <div className={manageStyles.coursesContainer}>
        <h2 className={manageStyles.title}>Manage Courses</h2>
        <div className={manageStyles.coursesGrid}>
          {courseData.map((course) => (
            <div key={course.id} className={manageStyles.courseCard}>
              <h3>{course.name}</h3>
              <p><strong>Students:</strong> {course.students}</p>
              <p><strong>Schedule:</strong> {course.schedule}</p>
              <div className={manageStyles.courseActions}>
              <button onClick={() => navigate(`/markattendance/${course.id}`)}>
                Mark Attendance
              </button>
              <button onClick={() => navigate(`/assignments/${course.id}`)}>
                View Class
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
  );
}

export default ManageCourses;
