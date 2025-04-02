import TeacherSideNavbar from '../../components/TeacherNavbar.jsx'
import dashStyle from '../../components/styling/teacher/Dashboard.module.css';
import { FaBook, FaClipboard, FaCheckCircle, FaPlusCircle } from "react-icons/fa";

function TeacherDashboard() {

  return (
<>

      <TeacherSideNavbar />
      <main className={dashStyle.dashboardContainer}>
        {/* Quick Stats */}
        <div className={dashStyle.dashboardStats}>
          <div className={dashStyle.statCard}>
            <FaBook className={dashStyle.statIcon} />
            <h3>5</h3>
            <p>Courses</p>
          </div>
          <div className={dashStyle.statCard}>
            <FaClipboard className={dashStyle.statIcon} />
            <h3>12</h3>
            <p>Assignments</p>
          </div>
          <div className={dashStyle.statCard}>
            <FaCheckCircle className={dashStyle.statIcon} />
            <h3>8</h3>
            <p>Pending Grades</p>
          </div>
        </div>

      </main>
    </>
  );
}

export default TeacherDashboard;
