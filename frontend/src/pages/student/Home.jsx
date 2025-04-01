import StudentNavbar from "../../components/StudentNavbar.jsx";
import Card from "../../components/Card.jsx";

import StudentAssignments from "../../components/Assignments.jsx";
import StudentGrades from "../../components/Grades.jsx";
import StudentAnnouncements from "../../components/Announcement.jsx";
import StudentAttendance from '../../components/Myattendance.jsx' 

// const courses = [
//   { title: "XII", course: "Science", teacher: "Mr. Sharma", backgroundImage: "science.jpg" },
//   { title: "XI", course: "Commerce", teacher: "Mrs. Patel", backgroundImage: "commerce.jpg" },
//   { title: "X", course: "Arts", teacher: "Ms. D’Souza", backgroundImage: "arts.jpg" },
//   { title: "IX", course: "Maths", teacher: "Mr. Verma", backgroundImage: "math.jpg" },
//   { title: "VIII", course: "History", teacher: "Mrs. Mehta", backgroundImage: "history.jpg" },
// ];

const Home = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <StudentNavbar />
      <StudentAnnouncements/>
      <StudentGrades/>
      <StudentAssignments/>
      <StudentAttendance/>
      <Card/>
    </>
  );
};
export default Home;