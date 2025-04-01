import { useState } from "react";
import Navbar from "./TNavbar";
import dashStyle from './styling/teacher/Dashboard.module.css';
import { FaBook, FaClipboard, FaCheckCircle, FaPlusCircle } from "react-icons/fa";

function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={dashStyle.dashboardWrapper}>
      <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`dashboard-container ${sidebarOpen ? "shifted" : ""}`}>
        {/* Quick Stats */}
        <div className={dashStyle.dashboardStats}>
          <div className="stat-card">
            <FaBook className="stat-icon" />
            <h3>5</h3>
            <p>Courses</p>
          </div>
          <div className="stat-card">
            <FaClipboard className="stat-icon" />
            <h3>12</h3>
            <p>Assignments</p>
          </div>
          <div className="stat-card">
            <FaCheckCircle className="stat-icon" />
            <h3>8</h3>
            <p>Pending Grades</p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default TeacherDashboard;
