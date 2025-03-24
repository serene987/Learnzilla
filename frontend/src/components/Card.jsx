import React from "react";
import "../styles/Card.css"; // Ensure correct CSS path

const Card = ({ title, course, teacher, background }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${background})` }}>
      <div className="card-overlay">
        <h2>{title}</h2>
        <p className="course-name">{course}</p>
        <p className="teacher-name">{teacher}</p>
      </div>
    </div>
  );
};

export default Card;
