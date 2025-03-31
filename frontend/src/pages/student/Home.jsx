import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Card from "../../components/Card.jsx";

import StudentAssignments from "./Assignments.jsx";
import StudentGrades from "./Grades.jsx";
import StudentAnnouncements from "./Announcement.jsx";
import StudentAttendance from './Myattendance.jsx' 

const courses = [
  { title: "XII", course: "Science", teacher: "Mr. Sharma", backgroundImage: "science.jpg" },
  { title: "XI", course: "Commerce", teacher: "Mrs. Patel", backgroundImage: "commerce.jpg" },
  { title: "X", course: "Arts", teacher: "Ms. D’Souza", backgroundImage: "arts.jpg" },
  { title: "IX", course: "Maths", teacher: "Mr. Verma", backgroundImage: "math.jpg" },
  { title: "VIII", course: "History", teacher: "Mrs. Mehta", backgroundImage: "history.jpg" },
];

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <StudentAnnouncements/>
      <StudentGrades/>
      <StudentAssignments/>
      <StudentAttendance/>
      <Card/>
    </>
  );
};
export default Home;