import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import TeacherNavbar  from './TeacherNavbar.jsx';

=======
import Navbar from "./TeacherNavbar.jsx";
>>>>>>> 29a1c15296cf809af01299adca97535fa9278cbe
import manageStyles from './styling/teacher/Manage.module.css';

import {courseData} from './CourseData.jsx';
function ManageCourses() {
  const navigate = useNavigate();
  return (
    <>
<<<<<<< HEAD
    <TeacherNavbar/>
=======
    <Navbar/>
>>>>>>> 29a1c15296cf809af01299adca97535fa9278cbe
      <div className={manageStyles.coursesContainer}>
        <h2 className={manageStyles.title}>Manage Courses</h2>
        <div className={manageStyles.coursesGrid}>
          {courseData.map((course) => (
<<<<<<< HEAD
            <div key={courses.id} className={manageStyles.courseCard}>
=======
            <div key={course.id} className={manageStyles.courseCard}>
>>>>>>> 29a1c15296cf809af01299adca97535fa9278cbe
              <h3>{course.name}</h3>
              <p><strong>Students:</strong> {course.students}</p>
              <p><strong>Schedule:</strong> {course.schedule}</p>
              <div className={manageStyles.courseActions}>
              <button onClick={() => navigate(`/markattendance/${course.id}`)}>
                Mark Attendance
              </button>
              <button onClick={() => navigate(`/viewclass/${course.id}`)}>
                View Class
              </button>
              <button onClick={() => navigate(`/giveassignments/${course.id}`)}>
                Give Assignment
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
