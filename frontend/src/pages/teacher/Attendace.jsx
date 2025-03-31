import Navbar from "./Navbar"; // Import your existing Navbar component

function Attendance() {
    return (
      <>
        <Navbar /> 

        <div className='Attendance'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center"
          }}
          >
          <h1 >Attendance</h1>
        </div>
        </>
    );
  }
  
  export default Attendance;