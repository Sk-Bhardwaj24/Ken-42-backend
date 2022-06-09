import { Routes, Route } from "react-router-dom";

import "./App.css";
import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/Admin/AdminLogin";
import Navbar from "./components/Navbar";
import StudentLogin from "./components/Student/StudentLogin";
import Students from "./components/Student/Students";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<StudentLogin />} />
        <Route path="/dashboard" element={<Students />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashadmin" element={<Admin />} />
      </Routes>
      {/* <StudentLogin /> */}
    </div>
  );
}

export default App;
