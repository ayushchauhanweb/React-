import { Route, Routes } from "react-router";
import  { AuthDashboard } from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Profile, { AuthProfile } from "./components/Profile";

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      <Navbar />
      {/* <AuthDashboard /> */}
      <Routes>
      <Route path="/" element={<p>Home</p>} />
      <Route path="/dashboard" element={<AuthDashboard />} />
      <Route path="/profile" element={<AuthProfile name={"Ayush"} role={"Developer"} />} />
      </Routes>
    </div>
  );
}

export default App;
