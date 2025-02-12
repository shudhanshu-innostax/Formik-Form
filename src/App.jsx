import { useState } from "react";
import Tabel from "./components/Tabel";
import StudentForm from "./components/StudentForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [studentData, setStudentData] = useState([]);


  return (
    <div>
          <Router>
          <Routes>
            <Route path="/"  element={<StudentForm setStudentData={setStudentData} studentData={studentData}/>}/>
            <Route path="/table" element={<Tabel data={studentData}/>}/>
          </Routes>
          </Router>
    </div>
  )
}

export default App