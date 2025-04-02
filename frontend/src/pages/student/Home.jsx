import StudentNavbar from "../../components/StudentNavbar.jsx";
import styles from "../../components/styling/student/Card.module.css";

const courses = [
  { title: "Data Structures", professor: "Dr. Sharma" },
  { title: "Operating Systems", professor: "Prof. Nair" },
  { title: "Database Systems", professor: "Ms. Patel" },
  { title: "Web Development", professor: "Mr. Verma" },
  { title: "Software Engineering", professor: "Mrs. Mehta" },
  { title: "C Programming", professor: "Dr. D’Souza" },
];

const Home = () => {
  return (
    <>
      <StudentNavbar />
      <div className={styles.homeContainer}>
        <h1 className={styles.heading}>My Courses</h1>
        <div className={styles.cardGrid}>
          {courses.map((course, index) => (
            <div className={styles.card} key={index}>
              <h2 className={styles.cardTitle}>{course.title}</h2>
              <p className={styles.professor}>Instructor: {course.professor}</p>
              <div className={styles.buttons}>
    
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
