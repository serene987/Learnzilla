import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./teacher.css";
import { FaBook, FaClipboard, FaCheckCircle, FaPlusCircle } from "react-icons/fa";

function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? "shifted" : ""}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} />
      <main className="dashboard-content">
        {/* Quick Stats */}
        <div className="dashboard-stats">
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

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="action-button">
            <FaPlusCircle /> Create Assignment
          </button>
          <button className="action-button">
            <FaPlusCircle /> Post Announcement
          </button>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Graded John Doe's assignment</li>
            <li>Posted a new announcement in Math 101</li>
            <li>Created a new assignment for Science</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default TeacherDashboard;
