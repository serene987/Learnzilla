// StudentAnnouncements.jsx
import { useState } from "react";

function StudentAnnouncements() {
  const [announcements, setAnnouncements] = useState([
    "Project submission deadline extended to April 10th.",
    "Upcoming test on April 15th, please prepare accordingly."
  ]);

  return (
    <div>
      <h2>Announcements</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index}>{announcement}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentAnnouncements;