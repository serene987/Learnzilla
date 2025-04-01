import { useState } from "react";
import Studentstyle from '../components/styling/SAnnounce.module.css';
function StudentAnnouncements() {
  const [announcements, setAnnouncements] = useState([
    "Project submission deadline on April 10th.",
    "Upcoming test on April 15th, please prepare accordingly.",
  ]);

  return (
    <div className={Studentstyle.announcements-container}>
      <h2 className={Studentstyle.announcements-title}>Announcements</h2>
      <ul className={Studentstyle.announcements-list}>
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
  );
}

export default StudentAnnouncements;
