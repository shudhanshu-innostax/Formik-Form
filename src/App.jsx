/* eslint-disable react/prop-types */
import { useState } from "react";
import Tabel from "./components/Tabel";
import StudentForm from "./components/StudentForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const [studentData, setStudentData] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <StudentForm
                setStudentData={setStudentData}
                studentData={studentData}
                editStudent={editStudent}
                setEditStudent={setEditStudent}
              />
            }
          />
          <Route
            path="/table"
            element={
              <TabelWrapper
                studentData={studentData}
                setEditStudent={setEditStudent}
                setStudentData={setStudentData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

function TabelWrapper({ studentData, setEditStudent, setStudentData }) {
  const navigate = useNavigate();

  const handleEdit = (student, index) => {
    setEditStudent({ ...student, index });
    navigate("/");
  };

  const handleDelete = (index) => {
    setStudentData(studentData.filter((_, i) => i !== index));
  };

  return (
    <Tabel data={studentData} onEdit={handleEdit} onDelete={handleDelete} />
  );
}

export default App;
