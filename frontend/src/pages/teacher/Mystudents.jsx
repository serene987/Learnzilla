import Navbar from "./Navbar"; // Import your existing Navbar component

function Mystudents() {
    return (
      <>
        <Navbar /> 

        <div className='Mystudents'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center"
          }}
        >
          <h1>My students</h1>
        </div>
        </>
    );
  }
  
  export default Mystudents;