import { useState } from "react";
import Studentstyle from '../components/styling/student/Announce.module.css';

import StudentNavbar from './StudentNavbar.jsx'

function StudentAnnouncements() {
  const [announcements,setAouncement] = useState([
    "Project submission deadline on April 10th.",
    "Upcoming test on April 15th, please prepare accordingly.",
  ]);

  return (
    <>
    <StudentNavbar/>
    <div className={Studentstyle.announcementsContainer}>
      <h2 className={Studentstyle.announcementsTitle}>Announcements</h2>
      <ul className={Studentstyle.announcementsList}>
        {announcements.map((announcement, index) => (
          <li
            key={index}
            className={`announcement-item ${
              index === 0 ? "new-announcement" : ""
            }`}
            >
            {announcement}
          </li>
        ))}
      </ul>
    </div>
        </>
  );
}

export default StudentAnnouncements;
