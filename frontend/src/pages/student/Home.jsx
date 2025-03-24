import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import "../../styles/Home.css";

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
    <div className="home-page">
      <Navbar />
      <SideNavbar toggleSidebar={setSidebarOpen} />
      <div className={`card-container ${sidebarOpen ? "expanded" : ""}`}>
        {courses.map((course, index) => (
          <Card key={index} {...course} />
        ))}
      </div>
    </div>
  );
};
export default Home;