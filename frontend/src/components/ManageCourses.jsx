import { useNavigate } from "react-router-dom";
import TeacherNavbar  from './TeacherNavbar.jsx';

import manageStyles from './styling/teacher/Manage.module.css';

import {courseData} from './CourseData.jsx';
function ManageCourses() {
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: "Math 101", students: 30, schedule: "Mon & Wed, 10:00 AM" },
    { id: 2, name: "Physics 202", students: 25, schedule: "Tue & Thu, 2:00 PM" },
  ];

  return (
    <>
    <TeacherNavbar/>
      <div className={manageStyles.courses-container}>
        <h2 className={manageStyles.title}>Manage Courses</h2>
        <div className={manageStyles.courses-grid}>
          {courseData.map((course) => (
            <div key={course.id} className={manageStyles.course-card}>
              <h3>{course.name}</h3>
              <p><strong>Students:</strong> {course.students}</p>
              <p><strong>Schedule:</strong> {course.schedule}</p>
              <div className={manageStyles.course-actions}>
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
