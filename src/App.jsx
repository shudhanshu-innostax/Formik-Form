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
  const [editStudent, setEditStudent] = useState(null);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <StudentForm
                editStudent={editStudent}
                setEditStudent={setEditStudent}
              />
            }
          />
          <Route
            path="/table"
            element={
              <TabelWrapper
                setEditStudent={setEditStudent}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

function TabelWrapper({setEditStudent}) {
  const navigate = useNavigate();

  const handleEdit = (student, index) => {
    setEditStudent({ ...student, index });
    navigate("/");
  };

  return (
    <Tabel onEdit={handleEdit}/>
  );
}

export default App;