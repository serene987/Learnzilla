import Navbar from "./Navbar"; // Import your existing Navbar component

function Teacherdashboard() {
  return (
    <div>
      <Navbar /> 
      <div
        className="Home"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Teacherdashboard;
