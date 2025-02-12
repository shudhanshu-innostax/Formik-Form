import { useState } from "react";
import Tabel from "./components/Tabel";
import StudentForm from "./components/StudentForm";

function App() {
  const [studentData, setStudentData] = useState([]);


  return (
    <div>
          <StudentForm setStudentData={setStudentData} studentData={studentData}/>
          <Tabel data={studentData}/>
    </div>
  )
}

export default App