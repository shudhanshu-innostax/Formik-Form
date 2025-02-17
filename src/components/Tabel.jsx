/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./Table.css";
import { fetchData, deleteData } from "../slices/formslice";
import { useEffect, useState } from "react";

function Tabel({ onEdit }) {
  const data = useSelector((state) => state.studentForm.formData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const [pages,setPages] = useState(1);

  
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const selectPageHandler = (selectedPage) => {
    setPages(selectedPage);
  };

  const handleNextPage = () => {
    if (pages < totalPages) {
      setPages(pages + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };

  return (
    <div className="tabel">
      <div className="text-5xl font-bold text-center p-5 bg-blue-900 text-white">
        <h1>Table</h1>
      </div>


      {data.length === 0 ? (
        <h1 className="text-center mt-40 text-2xl">No data found</h1>
      ) : (
        <div className="table">
          <table className="border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-500 p-2 text-center">
                  FirstName
                </th>
                <th className="border border-gray-500 p-2">LastName</th>
                <th className="border border-gray-500 p-2">Email</th>
                <th className="border border-gray-500 p-2">Phone</th>
                <th className="border border-gray-500 p-2">Department</th>
                <th className="border border-gray-500 p-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.slice((pages - 1) * itemsPerPage, pages * itemsPerPage).map((value) => {
                return (
                  <tr key={value._id}>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.firstName}

                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.lastName}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.email}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.phone}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      {value.department}
                    </td>
                    <td className="border border-gray-500 p-2 text-center">
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded mr-2 hover:bg-green-700"
                        onClick={() => onEdit(value, { _id: value._id })}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() => dispatch(deleteData(String(value._id)))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      
<div className="flex justify-center absolute top-160 left-155">
        {data.length > 0 && (
          <div className="flex gap-5 items-center">
            <div>
              <span onClick={handlePreviousPage} className={`cursor-pointer bg-red-700 text-white p-2 rounded ${pages === 1 ? "hidden" : ""}`}>
                Prev
              </span>
            </div>
            <div className="flex gap-5">
              {Array.from({ length: totalPages }, (_, i) => (
                <span
                  key={i}
                  className={`bg-black text-white cursor-pointer px-4 py-2 rounded ${pages === i + 1 ? "bg-blue-500" : ""}`}
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}
                </span>
              ))}
            </div>
            <div>
              <span onClick={handleNextPage} className={`cursor-pointer bg-red-700 text-white p-2 rounded ${pages === totalPages ? "hidden" : ""}`}>
                Next
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabel;