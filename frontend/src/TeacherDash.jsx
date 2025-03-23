import Navbar from "../src/pages/teacher/Navbar.jsx";
import Sidebar from "../src/pages/teacher/Sidebar.jsx";


export default function TeacherDash(){

    return(
        <>
            <Navbar/>
            <Sidebar/>
            <div className='Navbar'>
                <h1>Teacher Dashboard</h1>
            </div>
        </>
    );
}