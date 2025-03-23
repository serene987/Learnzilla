import Navbar from "../pages/teacher/Navbar";
import Sidebar from "../pages/teacher/Sidebar";


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